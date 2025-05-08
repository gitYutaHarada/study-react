'use client';

import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";



export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleChange = useCallback ((e) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    }
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button
        onClick={handleClick}
      >
        ボタン
      </button>
      <button onClick={handleDisplay}
      >
        {isShow ? "非表示" : "表示"}
      </button>
      <input type="text" value={text} onChange={handleChange}
      // className="border border-gray-400 rounded px-3 py-2 bg-white"
      />
      <Main page="index" />
      <Footer />
    </div>
  );
}
