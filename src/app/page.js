import Image from "next/image";
import Header from "./components/Header/Header";
import Platforms from "./components/Platforms/Platforms";
import Features from "./components/Features/Features";
import Button from "./components/Button/Button";
import { HiDocumentReport } from "react-icons/hi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Plans from "./components/Plans/Plans";
import ScrollMarquee from "./components/ScrollMarquee/ScrollMarquee";

export default function Home() {
  return (
    <>
      <Header />
      <Platforms />
      {/* <Features /> */}

      <section className="grid grid-cols-1 lg:grid-cols-2 container items-center gap-12">
        <aside>
          <h3 data-animate="fade-in-up">Real-time Strategy</h3>
          <p className="lg:w-5/6 py-4" data-animate="fade-in-up">
            Use our live test network to see all the ways our product can help
            your business.{" "}
          </p>

          <div data-animate="fade-in-up">
            <Button>Learn More</Button>
          </div>
        </aside>

        <aside
          data-animate="fade-in-up"
          className="w-full mx-auto bg-purple-700 aspect-square rounded-full"
        ></aside>
      </section>

      <ScrollMarquee />

      <section className="grid grid-cols-1 lg:grid-cols-2 container items-center gap-12">
        <aside
          data-animate="fade-in-up"
          className="w-full mx-auto bg-purple-700 aspect-square rounded-full order-2 lg:order-1"
        ></aside>
        <aside className="order-1 lg:order-2">
          <h3 data-animate="fade-in-up">API Documentation</h3>
          <p className="lg:w-5/6 pt-4" data-animate="fade-in-up">
            Use our live test network to see all the ways our product can help
            your business.{" "}
          </p>

          <ul className="py-4 space-y-2 lg:w-2/3">
            <li
              className="bg-gray-200 dark:bg-gray-900 rounded-lg p-4 flex gap-2 items-center"
              data-animate="fade-in-up"
            >
              <aside className="w-12 h-12 aspect-square bg-gray-300 dark:bg-gray-800 rounded flex justify-center items-center">
                <HiDocumentReport className="text-4xl" />
              </aside>

              <aside>
                <h6>Your Product Feature 1</h6>
                <p>Feature Description </p>
              </aside>
            </li>
            <li
              className="bg-gray-200 dark:bg-gray-900 rounded-lg p-4 flex gap-2 items-center"
              data-animate="fade-in-up"
            >
              <aside className="w-12 h-12 aspect-square bg-gray-300 dark:bg-gray-800 rounded flex justify-center items-center">
                <HiDocumentReport className="text-4xl" />
              </aside>

              <aside>
                <h6>Your Product Feature 1</h6>
                <p>Feature Description </p>
              </aside>
            </li>
            <li
              className="bg-gray-200 dark:bg-gray-900 rounded-lg p-4 flex gap-2 items-center"
              data-animate="fade-in-up"
            >
              <aside className="w-12 h-12 aspect-square bg-gray-300 dark:bg-gray-800 rounded flex justify-center items-center">
                <HiDocumentReport className="text-4xl" />
              </aside>

              <aside>
                <h6>Your Product Feature 1</h6>
                <p>Feature Description </p>
              </aside>
            </li>
            <li
              className="bg-gray-200 dark:bg-gray-900 rounded-lg p-4 flex gap-2 items-center"
              data-animate="fade-in-up"
            >
              <aside className="w-12 h-12 aspect-square bg-gray-300 dark:bg-gray-800 rounded flex justify-center items-center">
                <HiDocumentReport className="text-4xl" />
              </aside>

              <aside>
                <h6>Your Product Feature 1</h6>
                <p>Feature Description </p>
              </aside>
            </li>
          </ul>

          <div data-animate="fade-in-up">
            <Button>Learn More</Button>
          </div>
        </aside>
      </section>

      <section className="container">
        <h6
          className="bg-gray-700 inline-block px-4 py-2 rounded-full !text-white"
          data-animate="fade-in-up"
        >
          Tech Stack
        </h6>

        <h2 className="mt-4" data-animate="fade-in-up">
          Unrivaled Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <a
            href="#"
            className="inline-block w-full group"
            data-animate="fade-in-up"
          >
            <Image
              src={
                "https://framerusercontent.com/images/3xLQPn6AYxYOeDj4LLHrM98d1Wk.jpg?scale-down-to=512"
              }
              alt="article1"
              width={512}
              height={288}
              className="w-full lg:aspect-[512/288] object-cover rounded-lg"
            />
            <div className="flex justify-between mt-4 text-2xl items-center">
              <aside>Explore our tech stack</aside>
              <IoArrowForwardCircleOutline className="mr-2 group-hover:mr-0 transition-all" />
            </div>
          </a>

          <a
            href="#"
            className="inline-block w-full group col-span-1 lg:col-span-2"
            data-animate="fade-in-up"
          >
            <Image
              src={
                "https://framerusercontent.com/images/3xLQPn6AYxYOeDj4LLHrM98d1Wk.jpg?scale-down-to=512"
              }
              alt="article1"
              width={1024}
              height={278}
              className="w-full rounded-lg lg:aspect-[1024/278] object-cover"
            />
            <div className="flex justify-between mt-4 text-2xl items-center">
              <aside>Explore our tech stack</aside>
              <IoArrowForwardCircleOutline className="mr-2 group-hover:mr-0 transition-all" />
            </div>
          </a>
        </div>
      </section>

      <Plans path={"/"} />
    </>
  );
}
