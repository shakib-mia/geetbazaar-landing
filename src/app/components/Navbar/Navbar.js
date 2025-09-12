"use client";
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import useScrollDirection from "@/app/hooks/useScrollDirection";
import { usePathname } from "next/navigation";
import SafeLink from "../SafeLink/SafeLink";
import logo_black from "@/app/assets/logo_black.webp";
import logo_white from "@/app/assets/logo_white.webp";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [phoneNav, showPhoneNav] = useState(false);
  const { scrollDirection, lastScrollY } = useScrollDirection();
  const pathname = usePathname();

  const isHome = pathname === "/";
  const [theme, setTheme] = useState("light");

  // sync with localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    // listen to changes from ThemeToggle
    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains("dark")) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-[99999] py-4 font-rubik transition-all duration-300
        ${scrollDirection === "down" ? "-translate-y-52" : "translate-y-0"}
        ${
          lastScrollY > 0
            ? "!bg-white/70 dark:!bg-black/70 backdrop-blur-lg !text-black dark:!text-white"
            : isHome
            ? "bg-transparent !text-black dark:!text-white"
            : "!text-black dark:bg-black/70 backdrop-blur-lg"
        }
      `}
    >
      <div className="container flex items-center justify-between relative">
        {/* Logo */}
        <SafeLink href="/" className="text-2xl font-gilroy-bold cursor-pointer">
          <Image
            src={theme === "dark" ? logo_white : logo_black}
            alt="logo"
            className="w-52"
          />
        </SafeLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-normal">
          <li>
            <SafeLink href="/" className="hover:text-purple-600">
              Home
            </SafeLink>
          </li>
          <li>
            <SafeLink href="/about" className="hover:text-purple-600">
              About
            </SafeLink>
          </li>
          <li>
            <SafeLink href="/services" className="hover:text-purple-600">
              Services
            </SafeLink>
          </li>
          <li>
            <SafeLink href="/features" className="hover:text-purple-600">
              Features
            </SafeLink>
          </li>
          <li>
            <SafeLink href="/contact" className="hover:text-purple-600">
              Contact
            </SafeLink>
          </li>
        </ul>

        {/* CTA & Hamburger */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            href="https://geetbazaar.adztronaut.com/login"
            target="_blank"
            className="hidden md:block"
          >
            Get Started
          </Button>

          <button
            className="md:hidden focus:outline-none ml-2"
            onClick={() => showPhoneNav(!phoneNav)}
          >
            {phoneNav ? (
              <svg
                className="w-6 h-6 fill-white hover:fill-primary"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 fill-white hover:fill-primary"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-[137%] left-0 w-full bg-black/80 z-[9999999] backdrop-blur-lg text-white shadow-md md:hidden max-h-80 transition-[height] overflow-hidden ${
            phoneNav ? "h-96" : "h-0"
          }`}
        >
          <ul className="flex flex-col divide-y font-medium">
            <li>
              <SafeLink
                href="/"
                className="hover:text-purple-600 inline-block py-2 px-4 w-full"
              >
                Home
              </SafeLink>
            </li>
            <li>
              <SafeLink
                href="/about"
                className="hover:text-purple-600 inline-block py-2 px-4 w-full"
              >
                About
              </SafeLink>
            </li>
            <li>
              <SafeLink
                href="/services"
                className="hover:text-purple-600 inline-block py-2 px-4 w-full"
              >
                Services
              </SafeLink>
            </li>
            <li>
              <SafeLink
                href="/features"
                className="hover:text-purple-600 inline-block py-2 px-4 w-full"
              >
                Features
              </SafeLink>
            </li>
            <li>
              <SafeLink
                href="/contact"
                className="hover:text-purple-600 inline-block py-2 px-4 w-full"
              >
                Contact
              </SafeLink>
            </li>
            <li className="container py-3">
              <Button
                href="https://geetbazaar.adztronaut.com/login"
                target="_blank"
                className="inline-block w-full text-center"
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
