"use client"

import Image from 'next/image'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import {NavbarDrawer} from './drawer.tsx';
import { useState, useEffect } from 'react';

export default function Home() {

  const [isMobile, setMobile] = useState(window.innerWidth < 430);

  const Logo = styled(ViewHeadlineIcon)`
    font-size: 2.5rem;
  `;

  const ToggleDarkModeButton = styled(NightlightRoundIcon)`
    font-size: 2.5rem;
  `

  const openHomePage = () => {

  }

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
    <div className="bg-slate-800 min-h-screen pt-5"> 

      <section id = "Navbar at the top">
        <div className="flex flex-row w-full">

          {/* logo container */}
          <div className=" text-white mx-auto text-4xl">
          JG
          </div>

          <div className=" mx-auto text-white">
            {isMobile ? 
            <IconButton className='hover:scale-110 text-white duration-200 focus:text-green-300' onClick={openHomePage}>
              <Logo  />
            </IconButton> 
            : <div></div>
            }

            <IconButton className='hover:scale-110 text-white duration-200 focus:text-green-300' onClick={openHomePage}>
              <ToggleDarkModeButton />
            </IconButton>
          </div>
        </div>
      </section>


    </div>
  )
}
