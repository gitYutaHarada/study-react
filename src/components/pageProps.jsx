'use client';

import React, { createContext, useState } from "react";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { usebgColor } from "@/hooks/usebgColor";

export const Context = createContext(null);

export function PageProps({ children }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  usebgColor();

  return (
    <Context.Provider value={{ ...counter, ...inputArray }}>
      {children}
    </Context.Provider>
  );
}
