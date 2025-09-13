"use client";

import useHearthMotion from "@/app/hooks/useHearthMotion";
import useLenis from "@/app/hooks/useLenis";

const HearthMotionInitializer = ({ children }) => {
  useLenis();
  useHearthMotion();
  return children;
};

export default HearthMotionInitializer;
