"use client";

import React, { useContext } from "react";
import { Context } from "@/components/pageProps";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

const About = () => {
  const context = useContext(Context);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Main page="about" />

      {context.isShow ? <h1>{context.doubleCount}</h1> : null}
      <button onClick={context.handleClick}>ボタン</button>
      <button onClick={context.handleDisplay}>
        {context.isShow ? "非表示" : "表示"}
      </button>

      <input
        type="text"
        value={context.text}
        onChange={context.handleChange}
        className="border border-gray-400 rounded px-3 py-2 bg-white"
      />
      <button onClick={context.handleAdd}>追加</button>
      <ul>
        {context.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Footer />
    </div>
  );
};

export default About;
