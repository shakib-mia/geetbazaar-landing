"use client";

import { initAos } from "@/app/utils/initAos";
import { initLenis } from "@/app/utils/initLenis";
import React from "react";

const LenisAosProvider = () => {
  initAos();
  initLenis();

  return null;
};

export default LenisAosProvider;
