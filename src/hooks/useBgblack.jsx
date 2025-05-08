"use client";

import { useEffect } from "react";

export const useBgblack = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "black";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
