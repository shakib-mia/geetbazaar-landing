"use client";

import React, { useEffect, useRef, useState } from "react";

// Next.js + Tailwind on-scroll marquee component
// Usage: import ScrollMarquee from '@/components/ScrollMarquee'
// <ScrollMarquee text="Your long repeating text here" speedFactor={0.25} />

export default function ScrollMarquee({
  text = "This is a demo marquee — scroll to move it. ",
  speedFactor = 0.3,
  reverse = false,
  className = "",
  angle = -4, // container tilt angle
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const animRef = useRef(null);
  const lastScrollRef = useRef(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const contentWidthRef = useRef(1);
  const [active, setActive] = useState(false);

  // check if container is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
          } else {
            setActive(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // measure content width
  useEffect(() => {
    const measure = () => {
      if (contentRef.current) {
        contentWidthRef.current = contentRef.current.scrollWidth / 10 || 1;
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // smooth animation loop (only when active)
  useEffect(() => {
    if (!active) return;

    const tick = () => {
      const scrollY = window.scrollY || 0;
      const delta = scrollY - lastScrollRef.current;
      lastScrollRef.current = scrollY;

      const change = delta * speedFactor * (reverse ? -1 : 1);
      setOffset((prev) => {
        const next = (prev + change) % contentWidthRef.current;
        return next;
      });

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [speedFactor, reverse, active]);

  const transformStyle = {
    transform: `translate3d(${-(offset % contentWidthRef.current)}px, 0, 0)`,
    willChange: "transform",
  };

  return (
    <section ref={containerRef} className="w-screen overflow-x-hidden">
      <div
        className={`w-full overflow-hidden py-2 select-none bg-white/40 shadow-black/20 dark:shadow-white shadow-[0_0_20px] scale-105 text-black ${className}`}
        style={{
          transform: `rotate(${angle}deg)`,
          transformOrigin: "center center",
        }}
      >
        <div
          ref={contentRef}
          className="inline-flex gap-8 items-center whitespace-nowrap"
          style={transformStyle}
        >
          {/* প্রথমটা */}
          <span className="inline-block text-lg md:text-4xl font-oswald uppercase font-black">
            {text}
          </span>
          {/* তারপর loop */}
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="inline-block text-lg md:text-4xl font-oswald uppercase font-black"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
