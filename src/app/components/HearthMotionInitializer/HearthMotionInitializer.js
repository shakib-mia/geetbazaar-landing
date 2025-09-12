"use client";

import useHearthMotion from "@/app/hooks/useHearthMotion";
import useLenis from "@/app/hooks/useLenis";

const HearthMotionInitializer = () => {
  useLenis();
  useHearthMotion();
  return;
};

export default HearthMotionInitializer;
