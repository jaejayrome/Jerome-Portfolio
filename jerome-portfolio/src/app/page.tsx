"use client"

// one must install the dev type dependencies in typescript

import Image from 'next/image'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
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

export default function Home() {

  const [isMobile, setMobile] = useState(false);
  const [isDark, setDark] = useState(true)

  const Logo = styled(ViewHeadlineIcon)`
    font-size: 2.5rem;
  `;

  const ToggleDarkModeButton = styled(NightlightRoundIcon)`
    font-size: 2rem;
  `

  const ToggleLightModeButton = styled(LightModeIcon)`
    font-size: 2rem;
  `
  // Function is to enable the drawer to open
  const openHomePage = () => {
    setDark(!isDark)
  }

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

  return (
    // Background Container
    <div className="bg-black min-h-screen pt-5"> 

      <div className="flex flex-col space-x-4 space-y-24">

          <section id = "Navbar at the top">
            <div className="flex flex-row w-full relative">

              {/* logo container */}
              <div className=" text-white absolute top-0 left-0 pt-3 pl-3 sm:pt-6 sm:pl-6">
                <div className="flex flex-row space-x-4">
                  <Image src={TopLeftLogo} alt= "" className='w-10 h-10'></Image>
                  <div className='text-white text-2xl pt-2 font-topLeft'>
                   jerome-dev
                  </div>
                </div>
              </div>


              {/* This part is not responsive to larger screen sizes and small sizes also*/}
              <div className="flex justify-center items-center absolute top-0 right-0 border border-1 border-white mt-3 mr-3 sm:mt-6 sm:mr-6 rounded-xl">
                {isDark ? <IconButton className=' hover:scale-110 text-white duration-200 active:text-green-300' onClick={openHomePage}>
                  <ToggleDarkModeButton />
                </IconButton> :
                <IconButton className=' hover:scale-110 text-white duration-200 active:text-green-300' onClick={openHomePage}>
                <ToggleLightModeButton />
              </IconButton>}
              </div>
            </div>
          </section>

          <section id = "Introduction & Three.JS Portion">
            <div>
              {/* Main Page */}
                <div className="flex flex-col justify-center items-center ">
                  <div className="text-left text-white text-3xl mobile:text-4xl tablet:text-6xl ">
                  Hi.
                  <span className='block'>I&apos;m <span className="text-purple-300"> Jerome </span></span>
                  <span> A Software Developer</span>
                  </div>
            </div>                
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


          <section id = 'skills'>
            <div className='mx-auto'>
              <Tools/>
            </div>

          </section>
      </div>
    </div>
  )
}
