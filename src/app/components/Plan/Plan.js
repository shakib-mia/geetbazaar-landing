"use client";
import React from "react";

import Button from "../Button/Button";
// import "./Plan.css"; // extra CSS for glowing border

const Plan = ({ name, price, _id, planName, features, specialTag, id }) => {
  const isAlbum = planName.toLowerCase().includes("album");
  const link = isAlbum
    ? `https://geetbazaar.adztronaut.com/album-upload?${planName?.toLowerCase()}?${price}`
    : `https://geetbazaar.adztronaut.com/song-upload?${planName}?${price}`;

  console.log(planName);
  return (
    <div className="relative">
      {specialTag && (
        <span className="px-2 py-1 z-50 bg-purple-600 text-white text-xs font-semibold rounded absolute top-[-13.5px] right-4">
          {specialTag}
        </span>
      )}
      <div
        className="relative p-1 rounded-2xl overflow-hidden h-full"
        data-animate="fade-in-up"
        data-delay={500 * id}
      >
        {/* Glowing border */}
        {planName.toLowerCase().includes("pro") ? (
          <span className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-xl animate-spin-slow rounded-2xl"></span>
        ) : (
          <></>
        )}

        {/* Card content */}
        <div className="relative flex flex-col rounded-2xl shadow-md bg-white dark:bg-gray-800 z-10 overflow-hidden h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {name}
            </h3>
          </div>

          <div className="p-4 flex flex-col flex-1">
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              {price === 0 ? "Free" : `₹${(price / 100)?.toFixed(2)}`}
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                /release
              </span>
            </p>

            <ul className="flex-1 space-y-2 text-sm text-gray-700 dark:text-gray-300 pr-2 mb-4">
              {features?.map((f, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-purple-600 dark:text-purple-400">
                    ✔
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <Button href={link} target="_blank">
              Get Started
            </Button>
          </div>
        </div>

        {/* Animation CSS */}
        <style jsx>{`
          @keyframes spin-slow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 4s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

// export default Plan;

export default Plan;
