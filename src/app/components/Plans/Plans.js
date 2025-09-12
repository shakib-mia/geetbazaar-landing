import axios from "axios";
import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const Plans = async () => {
  const { data: plans } = await axios.get(
    "https://musicx-be.onrender.com/plans"
  );

  // console.log(plans);

  return (
    <section className="relative">
      <Image
        src={
          "https://framerusercontent.com/images/zYfxCcY7ldJoOggRkPifH65kqs.jpg"
        }
        width={1920}
        height={1080}
        alt="bg"
        // style={{ imageRendering: "auto" }}
        className="absolute w-full object-cover left-0 top-0 aspect-video object-center opacity-10 bottom-0 right-0 h-full z-0"
      />

      <div className="container py-16 relative">
        <div className="text-center">
          <h6
            className="bg-gray-700 inline-block px-4 py-2 rounded-full !text-white mx-auto"
            data-animate="fade-in-up"
          >
            Pricing
          </h6>

          <h2 className="mt-4 text-center" data-animate="fade-in-up">
            Choose Your Package
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {plans.length
            ? plans.slice(0, 3).map((plan) => {
                // Determine link
                const isAlbum = plan.planName.toLowerCase().includes("album");
                const link = isAlbum
                  ? `https://geetbazaar.adztronaut.com/album-upload?${plan?.planName?.toLowerCase()}?${
                      plan?.price
                    }`
                  : `https://geetbazaar.adztronaut.com/song-upload?${plan?.planName}?${plan?.price}`;

                return (
                  <div
                    key={plan?._id}
                    className="flex flex-col h-full rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 relative"
                  >
                    <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {plan?.name}
                      </h3>
                      {plan?.specialTag && (
                        <span className="px-2 py-1 bg-purple-600 text-white text-xs font-semibold rounded absolute top-[-13.5px] right-4">
                          {plan?.specialTag}
                        </span>
                      )}
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        {plan?.price === 0
                          ? "Free"
                          : `₹${(plan?.price / 100)?.toFixed(2)}`}
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          /release
                        </span>
                      </p>

                      <ul className="flex-1 space-y-2 text-sm text-gray-700 dark:text-gray-300 pr-2 mb-4">
                        {plan?.features?.slice(0, 8)?.map((f, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-purple-600 dark:text-purple-400">
                              ✔
                            </span>
                            {f}
                          </li>
                        ))}
                        {plan?.features?.length > 8 && (
                          <li className="text-purple-600 dark:text-purple-400">
                            +{plan?.features?.length - 8} more...
                          </li>
                        )}
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
              })
            : null}
        </div>

        <div className="flex justify-center items-center mt-4">
          <Button
            href="https://geetbazaar.adztronaut.com/plans"
            target="_blank"
          >
            Explore All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
