'use client';

import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect } from "react";



export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    //ブラウザがもともと行う操作をキャンセルする
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect( () => {
    document.body.style.backgroundColor = "lightblue";
    
    return () => {
      document.body.style.backgroundColor = "";
    }
  },[]);
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <a
        href="/about"
        onClick={handleClick}
      >
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
