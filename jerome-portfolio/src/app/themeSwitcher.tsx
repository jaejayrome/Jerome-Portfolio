"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from 'next/image'
import ToggleDarkModeButton from '../images/sunny-filled-loop-to-moon-filled-loop-transition.svg';
import ToggleLightModeButton from '../images/moon-filled-to-sunny-filled-loop-transition.svg'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      className={`w-fit absolute right-0 top-0 p-4 mt-3 mr-3 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-white `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
        {theme === "dark" ?  <Image src = {ToggleLightModeButton} alt =""></Image> : 
                             <Image src = {ToggleDarkModeButton} alt =""></Image> }
   
    </button>
  );
};