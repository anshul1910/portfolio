import { useRef, useState, type MouseEvent } from "react";

export function useTilt(maxTilt = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<{
    transform: string;
    glowX: number;
    glowY: number;
  }>({
    transform: "perspective(800px) rotateX(0deg) rotateY(0deg)",
    glowX: 50,
    glowY: 50,
  });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - y) * maxTilt * 2;
    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`,
      glowX: x * 100,
      glowY: y * 100,
    });
  };

  const onMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg)",
      glowX: 50,
      glowY: 50,
    });
  };

  return { ref, style, onMouseMove, onMouseLeave };
}
