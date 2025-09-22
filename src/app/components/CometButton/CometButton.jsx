"use client";

import React from "react";

const CometButton = ({ children, href, ...rest }) => {
  const Wrapper = href ? "a" : "button";

  return (
    <div className="relative flex items-center justify-center bg-black rounded-full whitespace-nowrap">
      <Wrapper
        href={href}
        className="relative px-8 py-3 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
        {...rest}
      >
        {/* Button Text */}
        <span className="relative z-10">{children}</span>

        {/* Comet Border (single head) */}
        {/* <span className="absolute inset-0 rounded-full p-[2px] comet-border animate-spin-reverse"></span> */}

        {/* Comet Glow Aura */}
        <span className="absolute inset-0 rounded-full p-[2px] comet-glow animate-spin-reverse"></span>

        {/* Inner Mask */}
        <span className="absolute inset-[2px] bg-black rounded-full"></span>
      </Wrapper>

      <style jsx>{`
        /* Reverse smooth spin */
        @keyframes spin-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }

        /* Single-head comet border */
        .comet-border {
          background: conic-gradient(
            from 0deg,
            rgba(0, 255, 255, 1) 0%,
            /* comet head */ rgba(0, 255, 255, 0) 40%,
            /* tail fade */ transparent 100%
          );
          border-radius: 9999px;
        }

        /* Glow trail */
        .comet-glow {
          background: conic-gradient(
            from 0deg,
            rgba(0, 255, 255, 0.5) 0%,
            rgba(0, 255, 255, 0) 100%,
            transparent 100%
          );
          border-radius: 9999px;
          filter: blur(6px);
        }
      `}</style>
    </div>
  );
};

export default CometButton;
