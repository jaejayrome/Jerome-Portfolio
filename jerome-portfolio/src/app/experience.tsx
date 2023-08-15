import Image from "next/image";
import VerticalImage from '../images/vertical_timeline.png'
import NUSLightLogo from '../images/nus_light_logo.png'
import NUSDarkLogo from '../images/nus_dark.png'
import GroundupDarkLogo from '../images/groundup_dark.png'
import GroundupLightLogo from '../images/groundup_lightt.png'
import CompclubLogo from '../images/compclub.png'
import JavaLogo from '../images/javaa.png'
import { useTheme } from "next-themes";
import FastAPILogo from '../images/fastest.png'
import PrismaLogo from '../images/prismal.png'
import DockerLogo from '../images/docker12.webp'
import PythonLogo from '../images/pyt.png'
import ReactLogo from '../images/react-logo.png'
import NodeLogo from '../images/node_real.png'
import MuiLogo from '../images/mui_logo.png'
import FirebaseLogo from '../images/firebase_r.png'


export default function Experience() {
    const { theme, setTheme } = useTheme();

   return (
        <div className="min-w-full">
            <div className="text-slate-600 dark:text-white font-topLeft text-4xl mobile:text-4xl"> 
                Relevant Experiences
            </div>

            <div className="space-y-9 flex flex-col justify-center items-center min-w-full text-slate-600 dark:text-white mt-5">
                {/* Experience Container */}
                
                <div className="flex flex-col space-y-4 iphone:flex-row iphone:space-y-0 iphone:space-x-4 justify-evenly items-center">
                    {/* left side */}
                    <div className="flex flex-col justify-center items-center text-sm iphone:text-md tablet:text-lg w-1/2"> 
                        <Image src= {theme === "light" ? NUSLightLogo : NUSDarkLogo} className = "object-contain h-4/5 w-4/5 iphone:object-contain" alt = ""></Image>
                        
                    </div>

                    {/* right side */}
                    <div className="w-1/2 text-md iphone:text-md mobile:text-lg tablet:text-xl text-left flex flex-col space-y-4 break-words">

                        <div>
                            <p className="font-bold text-left">
                            NUS School of Computing
                            </p>

                            <div className="text-left italic">
                                Teaching Assistant
                                <span className="block italic">
                                    Aug 2023 - Dec 2023
                                </span>
                            </div>
                        </div>
                        

                        <div className="space-y-2 text-md iphone:text-md mobile:text-lg tablet:text-xl dark:text-slate-400">
                            <p>
                            Taught CS2030: Programming Methodology II
                            </p>

                            <p>
                            Conducted Lab Sessions for a class of 30
                            </p>

                            <p> 
                            Taught Object-Oriented Programming and Functional Programming in Java  
                            </p>
                        </div>
       
                        <Image src = {JavaLogo} className="w-10 h-10 tablet:w-12 tablet:h-12" alt = ""></Image>
  




                

                    </div>
                    
                </div>


                <div className="flex flex-col space-y-4 iphone:flex-row iphone:space-y-0 iphone:space-x-4 justify-evenly items-center">
                    {/* left side */}
                    <div className="flex flex-col justify-center items-center text-sm iphone:text-md tablet:text-lg tablet:justify-end tablet:items-end w-1/2"> 
                        <Image src= {theme === "light" ? GroundupLightLogo : GroundupDarkLogo} className = " object-contain h-3/4 w-3/4 iphone:object-contain" alt = ""></Image>
                    </div>

                    {/* right side */}
                    <div className="w-1/2 flex-grow text-md iphone:text-md mobile:text-lg tablet:text-xl text-left flex flex-col space-y-4 break-words overflow-auto">

                    <div>
                        <p className="font-bold">
                            Groundup.ai 
                        </p>


                        <div className="text-left italic">
                            Data Scientist Intern
                            <span className="block italic">
                                May 2023 - Aug 2023
                            </span>
                        </div>
                    </div>
                   
                    
                    <div className="space-y-2 text-md iphone:text-md mobile:text-lg tablet:text-xl dark:text-slate-400">

                        <p>
                        Wrote dockerised feature applications                   
                        such as Pi-Blackbox and AutoClockSync 
                        for linux-based sound sensors.
                        </p>

                        <p>
                        Wrote S3 bucket-scrapping application,
            
                        making it easy for employees to query and download 
        
                        specific data needed for dataset creations 
                        </p>


                        <p> 
                        Integrated FastAPI Backend 
                        with an external asset management system,
                        </p>

                        <p>
                        ensuring that employees are able 
                        to seamlessly manage the companies logistics through a centralised user interface.  
                        </p>
                    </div>

                    <div className="flex flex-row justify-start items-start">
                        <div className="grid grid-cols-4 gap-2">
                        <Image src = {PythonLogo} className=" w-10 h-10 tablet:w-12 tablet:h-12" alt = ""></Image>
                        <Image src = {DockerLogo} className="w-10 h-10 tablet:w-12 tablet:h-12" alt = ""></Image>
                        <Image src = {FastAPILogo} className="w-10 h-10 tablet:w-12 tablet:h-12" alt = ""></Image>
                        <Image src = {PrismaLogo} className="w-10 h-10 tablet:w-12 tablet:h-12" alt = ""></Image>
                        </div>
                    </div>
                       
                    </div>
                    
                </div>




                


                <div className="flex flex-col space-y-4 iphone:flex-row iphone:space-y-0 iphone:space-x-4 justify-center items-center">
                    {/* left side */}
                    <div className="flex flex-col justify-center items-center text-sm iphone:text-md tablet:text-lg w-1/2"> 
                        <Image src= {theme === "light" ? NUSLightLogo : NUSDarkLogo} className = "object-contain h-3/4 w-3/4 iphone:object-contain" alt = ""></Image>
                    </div>

                    {/* right side */}
                    <div className="w-1/2  text-left flex flex-col space-y-4 break-words">
                        <div className="iphone:text-md tablet:text-lg">
                            <p className="font-bold text-left">
                                NUS School of Computing
                            </p>

                            <div className="text-left italic">
                                    Full Stack Developer
                                    <span className="block italic">
                                        May 2023 - Jul 2023
                                    </span>
                            </div>

                        </div>

                       

                        <div className="space-y-2 text-md iphone:text-md mobile:text-lg tablet:text-xl dark:text-slate-400">

                            <p>
                            Completed Module: CP2106 Software Development
                            </p>

                            <p>
                            Wrote Clean Code, Relevant Test Cases and Concise Documentation
                            </p>

                            <p> 
                            Gain better understanding of software engineering principles 
                            </p>

                            <p> 
                            Hands-on experience with React, Firebase, Node.js & Stripe API
                            </p>
                        </div>

                        <div className="flex flex-row justify-start items-start">
                            <div className="grid grid-cols-4 gap-2">
                                <Image src = {ReactLogo} className="w-10 h-10 tablet:w-12 tablet:h-12" alt = ""></Image>
                                <Image src = {NodeLogo} className="w-10 h-10 tablet:w-12 tablet:h-12 object-contain" alt = ""></Image>
                                <Image src = {MuiLogo} className="w-10 h-10 tablet:w-12 tablet:h-12" alt = ""></Image>
                                <Image src = {FirebaseLogo} className="w-10 h-10 tablet:w-12 tablet:h-12" alt = ""></Image>
                            </div>
                        </div>
                    </div>
                    
                </div>
              
                
                 
                
            </div>







        </div>
   )
}