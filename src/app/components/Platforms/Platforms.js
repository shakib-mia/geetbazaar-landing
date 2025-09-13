"use client";

// import { ThemeContext } from "@/app/context/ThemeContext";
import axios from "axios";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

const Platforms = () => {
  // const { data: platforms } = axios.get(
  //   "https://musicx-be.onrender.com/platforms/all"
  // ).;
  // const data = useContext(ThemeContext);
  // const { theme } = useTheme();
  const { theme } = useContext(ThemeContext);

  // console.log(platforms);
  const [platforms, setPlatforms] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    axios
      .get("https://musicx-be.onrender.com/platforms/all")
      .then(({ data }) => setPlatforms(data));
  }, []);

  useEffect(() => console.log(theme), [theme]);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  // console.log(theme);

  return (
    <div className="relative w-full lg:w-1/2 mx-auto">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white dark:from-black via-transparent to-white dark:to-black z-[99]"></div>
      <Marquee autoFill className="text-white" speed={100}>
        {platforms.map(({ logo_url, cat_name }, key) => (
          <div className="p-3" key={key}>
            <Image
              width={100}
              height={50}
              src={
                theme === "light" ? logo_url : logo_url.replace(".png", ".webp")
              }
              alt={cat_name}
              className="h-full"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Platforms;
