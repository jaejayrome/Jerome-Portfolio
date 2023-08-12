"use client"

// one must install the dev type dependencies in typescript

import Image from 'next/image'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
// import {NavbarDrawer} from './drawer.tsx';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import About from './about';
import PandaImage from '../images/coding_panda.png'
import TaskBar from '../images/logo.svg'
import NavbarDrawer from './drawer';
import TopLeftLogo from '../images/logo.svg'
import Portrait from '../images/removed_p.png'
import LightModeIcon from '@mui/icons-material/LightMode';
import Tools from './tools';
import Navbar from './navbar';
import {motion} from 'framer-motion';
import Experience from './experience';
import { ThemeSwitcher } from './themeSwitcher';

export default function Home() {

  const [isMobile, setMobile] = useState(false);
  // able to execute it because im using it within use effect 
  useEffect(() => {
    if (window.innerWidth < 430) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    const updateMedia = () => {
      if (window.innerWidth < 430) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const roles = ['Frontend Developer', 'Backend Developer', 'Data Scientist']

  const moveUp = {
    hidden: { 
    opacity: 0,
    y: 20, 
    transition: { type: "spring", stiffness: 100}
    },
    visible: {
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, delay: 0.5, ease: 'linear' }
    }
    }
  

  return (
    // Background Container
    <div className=" min-h-screen  pt-5"> 

      <div className="flex flex-col space-x-4 space-y-24">

          <section id = "Navbar at the top">
            <div className="flex flex-row w-full relative">

              {/* logo container */}
              <div className=" text-white absolute top-0 left-0 pt-3 pl-3 mobile:pt-6 mobile:pl-6">
                <div className="flex flex-row space-x-4">
                  <Image src={TopLeftLogo} alt= "" className='w-10 h-10'></Image>
                  <div className='text-slate-600 dark:text-white text-2xl pt-2 font-topLeft'>
                   jerome-dev
                  </div>
                </div>
              </div>

              <ThemeSwitcher />
            </div>
          </section>

          <section id = "Introduction & Three.JS Portion">
            <div>
              {/* Main Page */}
                <motion.div variants={moveUp} initial = "hidden" animate = "visible" className="flex flex-col justify-center items-center ">
                  <div className="text-left text-slate-600 dark:text-white text-3xl mobile:text-4xl tablet:text-6xl ">
                    Hi.
                    <span className='block'>I&apos;m <span className="text-cyan-400 dark:text-purple-300"> Jerome </span></span>
                    <span> A Software Developer</span>
                  </div>
            </motion.div>                
            </div>
          </section>

          <section id= "navbar section">
          <div>
            {isMobile ? 
                  <NavbarDrawer />
            : <Navbar/>}
            </div>
          </section>
          
        

          <section id='about me section'>
            <div  id='about'>
              <About />
            </div>
          </section>

          <section id = 'experiences'>
            <div>
              <Experience />
            </div>
          </section>


          <section id = 'skills'>
            <div className='mx-auto'>
              <Tools/>
            </div>
          </section>

          
      </div>
    </div>
  )
}
