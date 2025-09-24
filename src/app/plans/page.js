import React from "react";
import Plans from "../components/Plans/Plans";
import Button from "../components/Button/Button";
import Plan from "../components/Plan/Plan";
import Image from "next/image";
import axios from "axios";
import Accordion from "../components/Accordion/Accordion";

export const metadata = {
  title: "Plans - GeetBazaar",
  description:
    "Choose your package and release your music across all platforms with ease. Whether you are an independent artist or a label, we have a plan to suit your needs.",
};

const PlansPage = async () => {
  const { data: plans } = await axios.get(
    "https://musicx-be.onrender.com/plans"
  );
  const faqs = [
    {
      title: "What is GeetBazaar?",
      content:
        "GeetBazaar is a digital music distribution platform where artists and labels can release their songs on Spotify, JioSaavn, Wynk, Gaana, Apple Music, YouTube Music, and many other platforms.",
    },
    {
      title: "How can I upload my songs?",
      content:
        "You need to create an account on our platform and log in. Then go to the 'Song Upload' section, fill in the required details, and submit your track.",
    },
    {
      title: "Does GeetBazaar provide Caller Tune / CRBT services?",
      content:
        "Yes. Through GeetBazaar, you can get your songs as Caller Tunes (CRBT) on Jio, Vi, Airtel, BSNL, and other operators.",
    },
    {
      title: "How long does it take for a release to go live?",
      content:
        "Usually, songs go live on streaming platforms within 5–7 business days after submission. CRBT releases may take a little longer.",
    },
    {
      title: "How will I receive my revenue?",
      content:
        "Your streaming and CRBT revenue will be calculated monthly and provided to your account along with detailed reports.",
    },
    {
      title: "What percentage of commission does GeetBazaar take?",
      content:
        "GeetBazaar charges a very minimal service fee and ensures maximum revenue share goes to the artist. Revenue sharing may vary depending on the selected plan.",
    },
    {
      title: "Can international artists use GeetBazaar?",
      content:
        "Yes, absolutely. GeetBazaar works globally, and artists from any country can release their music through our platform.",
    },
  ];

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

          <p className="lg:w-8/12 mx-auto" data-animate="fade-in-up">
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

        <section>
          <h2
            data-animate="fade-in-up"
            data-delay="100"
            className="mt-4 text-center"
          >
            Frequently Asked Questions
          </h2>

          <Accordion items={faqs} />
        </section>

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
