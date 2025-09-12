"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Button = (props) => {
  const {
    outline,
    type = "button",
    children,
    onClick,
    className = "",
    href,
    target,
    ...rest
  } = props;

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const baseClasses = outline
    ? `px-6 py-3 text-center border border-black dark:border-white text-black dark:text-white rounded-lg cursor-pointer transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black ${className}`
    : `px-6 py-3 text-center bg-black dark:bg-white text-white dark:text-black rounded-lg cursor-pointer transition hover:bg-transparent hover:text-black dark:hover:text-white border border-black dark:border-white flex justify-center items-center gap-2 ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={baseClasses} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
