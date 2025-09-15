import React from "react";
import Plans from "../components/Plans/Plans";
import Button from "../components/Button/Button";
import Plan from "../components/Plan/Plan";
import Image from "next/image";
import axios from "axios";

const PlansPage = async () => {
  const { data: plans } = await axios.get(
    "https://musicx-be.onrender.com/plans"
  );

  // console.log(plans);

  return (
    <div className="relative py-12 lg:py-24">
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

      <div className="container relative">
        <div className="text-center">
          <h6
            className="bg-gray-700 inline-block px-4 py-2 rounded-full !text-white mx-auto"
            // data-animate="fade-in-up"
          >
            Pricing
          </h6>

          <h2
            // data-animate="fade-in-up"
            data-delay="100"
            className="mt-4 text-center"
          >
            Choose Your Package
          </h2>

          <p className="lg:w-8/12 mx-auto">
            Choose your package and release your music across all platforms with
            ease. Whether you are an independent artist or a label, we have a
            plan to suit your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {plans.length
            ? plans.map((plan, key) => (
                <Plan {...plan} id={key} key={plan._id} />
              ))
            : null}
        </div>

        {/* {path === "/" && (
          <div className="flex justify-center items-center mt-8">
            <Button href="/plans">Explore All</Button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default PlansPage;
