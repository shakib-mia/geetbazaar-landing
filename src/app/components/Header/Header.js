import React from "react";
import Button from "../Button/Button";
import hero from "./../../assets/hero.webp";
import Image from "next/image";
import GlowingButton from "../GlowingButton/GlowingButton";
// import bg from "@/app/assets/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg";
// import Button from "../Button/Button";
// import logo from "@/app/assets/logo_text.webp";
// import Image from "next/image";
// import { IoIosPlayCircle } from "react-icons/io";

const Header = () => {
  return (
    <header className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
        <aside>
          <h2
            data-animate="fade-in-left"
            data-delay="1000"
            className="text-black dark:text-primary"
          >
            Distribute Your Music. Grow Your Career.
          </h2>
          <p className="my-6" data-animate="fade-in-left" data-delay="100">
            Upload, manage, and track your songs effortlessly. GeetBazaar helps
            artists and labels distribute music worldwide, earn revenue, and
            connect with listeners like never before.
          </p>

          <div className="flex gap-4">
            {/* <Button data-animate="fade-in-left" data-delay="500">
              Get Started
            </Button> */}
            <div data-animate="fade-in-left" data-delay="500">
              <GlowingButton
                href={"https://geetbazaar.adztronaut.com/login"}
                target="_blank"
              >
                Get Started
              </GlowingButton>
            </div>
            <div data-animate="fade-in-left" data-delay="300">
              <Button
                className="border-0 dark:hover:bg-white/50 hover:text-white hover:bg-black/50"
                outline
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </aside>

        <aside>
          <Image
            src={hero}
            alt="hero"
            className="lg:w-1/2 mx-auto lg:scale-110 drop-shadow-[0_0_20px] dark:drop-shadow-white/45 drop-shadow-black/45"
            data-animate="fade-in"
            data-duration="1500"
          />
        </aside>
      </div>
    </header>
  );
};

export default Header;
