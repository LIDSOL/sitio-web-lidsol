#!/usr/bin/env bash
# reduce-images-dir.sh — reduce JPG/PNG files in a directory until <= MAX_KB
# Dependencies: imagemagick (magick), pngquant, cwebp (optional)
# Usage: ./reduce-images-dir.sh [directory] [max_kb]  (defaults: directory=".", max_kb=50)

set -euo pipefail

WORK_DIR="${1:-.}"
MAX_KB="${2:-50}"
MAX_BYTES=$((MAX_KB * 1024))

command -v magick >/dev/null 2>&1 || { echo "Requires ImageMagick (magick)"; exit 1; }

process_jpg() {
  local file="$1"
  local tmp
  tmp="$(mktemp --suffix=.jpg)"
  cp -- "$file" "$tmp"

  local quality=92
  local scale=100
  while [ "$(stat -c%s -- "$tmp")" -gt "$MAX_BYTES" ]; do
    if [ "$quality" -gt 30 ]; then
      quality=$((quality - 8))
    else
      scale=$((scale * 90 / 100))
      [ "$scale" -lt 20 ] && scale=20
    fi

    if [ "$scale" -lt 100 ]; then
      magick "$tmp" -resize "${scale}%" -quality "$quality" -strip "$tmp.tmp" && mv "$tmp.tmp" "$tmp"
    else
      magick "$tmp" -quality "$quality" -strip "$tmp.tmp" && mv "$tmp.tmp" "$tmp"
    fi

    if [ "$quality" -le 30 ] && [ "$scale" -le 20 ]; then
      magick "$tmp" -resize 20% -quality 20 -strip "$tmp.tmp" && mv "$tmp.tmp" "$tmp"
      break
    fi
  done

  mv -- "$tmp" "$file"
}

process_png() {
  local file="$1"
  local tmp out
  tmp="$(mktemp --suffix=.png)"
  cp -- "$file" "$tmp"

  if command -v pngquant >/dev/null 2>&1; then
    local colors=256
    while [ "$(stat -c%s -- "$tmp")" -gt "$MAX_BYTES" ] && [ "$colors" -ge 16 ]; do
      pngquant --force --output "$tmp.tmp" -- "$tmp" --speed 1 --colors "$colors" 2>/dev/null || true
      [ -s "$tmp.tmp" ] && mv "$tmp.tmp" "$tmp"
      colors=$((colors / 2))
    done
  fi

  if [ "$(stat -c%s -- "$tmp")" -gt "$MAX_BYTES" ] && command -v cwebp >/dev/null 2>&1; then
    local q=80
    while [ "$(stat -c%s -- "$tmp")" -gt "$MAX_BYTES" ] && [ "$q" -ge 20 ]; do
      out="$(mktemp --suffix=.webp)"
      cwebp -q "$q" "$tmp" -o "$out" >/dev/null 2>&1 || break
      if [ "$(stat -c%s -- "$out")" -le "$MAX_BYTES" ]; then
        mv -- "$out" "${file%.*}.webp"
        rm -f "$tmp"
        return
      else
        mv -- "$out" "$tmp"
      fi
      q=$((q - 10))
    done
  fi

  local quality=90
  local scale=100
  while [ "$(stat -c%s -- "$tmp")" -gt "$MAX_BYTES" ]; do
    if [ "$quality" -gt 30 ]; then
      quality=$((quality - 10))
    else
      scale=$((scale * 90 / 100))
      [ "$scale" -lt 20 ] && scale=20
    fi

    if [ "$scale" -lt 100 ]; then
      magick "$tmp" -resize "${scale}%" -quality "$quality" -strip PNG32:"$tmp.tmp" && mv "$tmp.tmp" "$tmp"
    else
      magick "$tmp" -quality "$quality" -strip PNG32:"$tmp.tmp" && mv "$tmp.tmp" "$tmp"
    fi

    if [ "$quality" -le 30 ] && [ "$scale" -le 20 ]; then
      magick "$tmp" -resize 20% -quality 10 -strip PNG32:"$tmp.tmp" && mv "$tmp.tmp" "$tmp"
      break
    fi
  done

  mv -- "$tmp" "$file"
}

export -f process_jpg process_png
export MAX_BYTES

shopt -s nullglob
cd -- "$WORK_DIR"

for f in *.{jpg,jpeg,JPG,JPEG,png,PNG}; do
  [ -f "$f" ] || continue
  size=$(stat -c%s -- "$f")
  if [ "$size" -le "$MAX_BYTES" ]; then
    printf "OK: %-40s %6.1f KB\n" "$f" "$(awk "BEGIN{printf \"%.1f\", $size/1024}")"
    continue
  fi

  echo "Processing: $f (size $(stat -c%s -- "$f") bytes)"
  case "${f##*.}" in
    jpg|jpeg|JPG|JPEG)
      process_jpg "$f"
      ;;
    png|PNG)
      process_png "$f"
      ;;
  esac

  newsize=$(stat -c%s -- "$f" 2>/dev/null || echo 0)
  if [ "$newsize" -le "$MAX_BYTES" ]; then
    printf "Done: %-40s %6.1f KB\n" "$f" "$(awk "BEGIN{printf \"%.1f\", $newsize/1024}")"
  else
    printf "Warning: %-36s still %6.1f KB (couldn't reach target)\n" "$f" "$(awk "BEGIN{printf \"%.1f\", $newsize/1024}")"
  fi
done

