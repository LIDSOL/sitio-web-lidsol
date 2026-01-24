import { useEffect, useState } from "react";

export function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow effect */}
      <div
        className="fixed pointer-events-none z-50 transition-opacity duration-300"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          opacity: isVisible ? 1 : 0,
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
