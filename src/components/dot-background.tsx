"use client";

import { useEffect, useRef } from "react";

// Fixed dotted backdrop with a soft spotlight that follows the pointer.
export function DotBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--mouse-x", `${e.clientX}px`);
      el.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={ref} aria-hidden className="fixed inset-0 z-0 overflow-hidden">
      <div className="bg-dot-grid absolute inset-0" />
      <div className="bg-dot-spotlight absolute inset-0" />
    </div>
  );
}
