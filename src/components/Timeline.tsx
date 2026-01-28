import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  text: string;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-6 space-y-8">
      <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />

      {items.map((item, i) => (

    <motion.div
      key={i}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15 }}
      className="relative grid grid-cols-[24px_80px_1fr] gap-4"
    >
      {/* Año */}
      <p className="text-sm font-semibold text-primary">
        {item.year}
      </p>

      {/* Texto */}
      <p className="text-muted-foreground text-lg leading-relaxed">
        {item.text}
      </p>
    </motion.div>
      ))}
    </div>
  );
}
