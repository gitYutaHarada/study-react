"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";

export const usebgColor = () => {
  const pathname = usePathname();

  const usebgColor = useMemo(() => {
    switch(pathname){
        case "/": {
            return "black";
        }
        case "/about": {
            return "gray";
        }
        default: {
            return "";
        }
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = usebgColor;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [usebgColor]);
};
