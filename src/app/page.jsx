'use client';

import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";



export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback( () => {
    if(count < 10){
      setCount(count => count + 1);
    }
  }, [count]);

  useEffect( () => {
    document.body.style.backgroundColor = "lightblue";
    
    return () => {
      document.body.style.backgroundColor = "";
    }
  },[]);
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <h1>{count}</h1>
      <button
        onClick={handleClick}
      >
        ボタン
      </button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
