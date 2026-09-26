"use client";

import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";
import Image from "next/image";


export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1600); // start fade before 2s ends
    const removeTimer = setTimeout(() => setVisible(false), 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#1e1e1e] transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
        <Image src="/vsCode.png" alt="error" width={50} height={50}/>
        
      <p className="text-gray-400 text-sm font-mono">om.choudhary</p>
    </div>
  );
}