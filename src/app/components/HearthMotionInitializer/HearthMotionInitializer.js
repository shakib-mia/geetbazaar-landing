"use client";

import useHearthMotion from "@/app/hooks/useHearthMotion";
import useLenis from "@/app/hooks/useLenis";

const HearthMotionInitializer = () => {
  useLenis();
  // useAos();
  useHearthMotion();
  return;
};

export default HearthMotionInitializer;
