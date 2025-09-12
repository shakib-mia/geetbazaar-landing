import React from "react";
import Button from "../Button/Button";

const Plan = ({ name, price, _id, planName, features, specialTag }) => {
  const isAlbum = planName.toLowerCase().includes("album");
  const link = isAlbum
    ? `https://geetbazaar.adztronaut.com/album-upload?${planName?.toLowerCase()}?${price}`
    : `https://geetbazaar.adztronaut.com/song-upload?${planName}?${price}`;

  return (
    <div
      key={_id}
      className="flex flex-col h-full rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 relative"
      data-animate="fade-in-up"
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {name}
        </h3>
        {specialTag && (
          <span className="px-2 py-1 bg-purple-600 text-white text-xs font-semibold rounded absolute top-[-13.5px] right-4">
            {specialTag}
          </span>
        )}
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
          {/* {features?.length > 8 && (
            <li className="text-purple-600 dark:text-purple-400">
              +{features?.length - 8} more...
            </li>
          )} */}
        </ul>

        <Button
          href={link}
          target="_blank"
          // className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-500 dark:hover:bg-purple-600 rounded-xl font-semibold transition text-center"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Plan;
