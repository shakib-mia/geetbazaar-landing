"use client";

import React from "react";

const GlowingButton = ({ children, href, ...rest }) => {
  return (
    <div className="relative flex items-center justify-center bg-black rounded-full whitespace-nowrap">
      {href ? (
        <a
          href={href}
          className="relative px-8 py-3 text-cyan-400 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:scale-105 cursor-pointer"
          {...rest}
        >
          <span className="relative z-10">{children}</span>

          {/* Rotating seamless gradient border */}
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 opacity-70 animate-spin-seamless blur-sm"></span>

          {/* Glowing aura that spins with border */}
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 opacity-40 blur-2xl animate-spin-seamless"></span>

          {/* Inner background mask */}
          <span className="absolute inset-[2px] bg-black rounded-full"></span>
        </a>
      ) : (
        <button className="relative px-8 py-3 text-cyan-400 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:scale-105 cursor-pointer">
          <span className="relative z-10">{children}</span>

          {/* Rotating seamless gradient border */}
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 opacity-70 animate-spin-seamless blur-sm"></span>

          {/* Glowing aura that spins with border */}
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 opacity-40 blur-2xl animate-spin-seamless"></span>

          {/* Inner background mask */}
          <span className="absolute inset-[2px] bg-black rounded-full"></span>
        </button>
      )}

      <style jsx>{`
        @keyframes spin-seamless {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-seamless {
          animation: spin-seamless 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GlowingButton;
