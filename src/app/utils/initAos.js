"use client";

// import Aos from "aos";
import AOS from "aos";

export const initAos = () => {
  AOS?.init({
    duration: 800, // Duration of animations
    // easing: "ease-in-out", // Easing option
    // once: true, // Only animate elements once
  });
};
