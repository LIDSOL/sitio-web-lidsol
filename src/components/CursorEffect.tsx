import { useEffect, useState } from "react";

export function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };

    if (isTouchDevice()) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Main cursor glow effect */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      >
        {/* Outer glow */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "80px",
            height: "80px",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)",
            filter: "blur(16px)",
          }}
        />
        {/* Inner glow */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "40px",
            height: "40px",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </div>
    </>
  );
}
