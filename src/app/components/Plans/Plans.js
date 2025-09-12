import axios from "axios";
import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import Plan from "../Plan/Plan";

const Plans = async ({ path }) => {
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

          <h2
            data-animate="fade-in-up"
            data-delay="100"
            className="mt-4 text-center"
          >
            Choose Your Package
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {plans.length
            ? plans
                .slice(0, path === "/" ? 3 : plans.length - 1)
                .map((plan) => <Plan {...plan} key={plan._id} />)
            : null}
        </div>

        {path === "/" && (
          <div className="flex justify-center items-center mt-8">
            <Button href="/plans">Explore All</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Plans;
