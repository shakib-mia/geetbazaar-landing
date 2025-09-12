// hooks/useScrollDirection.js
"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Lenis from "@studio-freight/lenis";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  const initLenis = useCallback(() => {
    // Check if elements exist
    const wrapper = document.getElementById("hm-wrapper");
    const content = document.getElementById("hm-content");

    if (!wrapper || !content) {
      console.error("Lenis initialization failed: Required elements not found");
      return;
    }

    // Destroy existing instance if any
    if (lenisRef.current) {
      lenisRef.current.destroy();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    }

    // Initialize Lenis
    lenisRef.current = new Lenis({
      wrapper: wrapper,
      content: content,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    const handleScroll = ({ scroll }) => {
      // Determine scroll direction
      setScrollDirection(scroll > lastScrollY ? "down" : "up");
      setLastScrollY(scroll);
    };

    // Add scroll event listener
    lenisRef.current.on("scroll", handleScroll);

    // Animation frame for Lenis
    const animate = (time) => {
      lenisRef.current.raf(time);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [lastScrollY]);

  useEffect(() => {
    // Initialize Lenis after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initLenis();
    }, 100);

    // Handle resize events
    const handleResize = () => {
      initLenis();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [initLenis]);

  return { scrollDirection, lastScrollY };
};

export default useScrollDirection;
