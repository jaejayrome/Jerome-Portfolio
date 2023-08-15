import Image from "next/image"
import NUSMarkt_Home from "../images/nusmarkt_home.png"
import NUSMarkt_H from "../images/nusmarkt_h.png"
import LinkIcon from '@mui/icons-material/Link';
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ReactLogo from '../images/react-logo.png'
import FirebaseLogo from '../images/firebase_r.png'
import NodeJSLogo from '../images/node_real.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import MaterialLogo from '../images/mui_logo.png'

export default function Projects() {
    return (
        <div className="h-screen overflow-auto">
            <div className="flex flex-col">
                <div className="font-topLeft text-4xl">
                    Projects
                </div>

                <div className="flex flex-col justify-center items-center mt-5">
                    
                    <div className="shrink-0 grow-0 p-6 mx-12 rounded-xl bg-slate-600 flex flex-col justify-around space-x-6 items-center ">

                    <Image src={NUSMarkt_H} alt = "" className="shrink-0 grow-0 object-contain rounded-xl"></Image>
        
                        <div className="mt-6">
                            <span className="text-lg mobile:text-xl laptop:text-2xl font-topLeft">
                            NUSMarkt
                            </span>

                            <span className="italic block font-topLeft text-md iphone:text-md mobile:text-lg tablet:text-xl">
                                An online marketplace made specially for NUS Merchandise
                            </span>


                            <div className="grid grid-cols-1 gap-3 text-md iphone:text-md mobile:text-lg tablet:text-xl font-normal">
                                <p>
                                NUS Marketplace Web Application that provide 3 main functionalities that allow users to be able to Buy, Sell & Trade Merchandises through this platform. 
                                </p>

                                <p>
                                Include Messaging & Review Feature and integrated Sentiment Classifier Model using Huggingface's Inference API. 
                                </p>
                                
                                <p>
                                Pre-Order Features emulating Kickstarter uses OpenAI Image Generation API that allow users to create shirt designs. 
                                </p>

                                <p>
                                Integrated Social Media Authentication & Payment using Stripe API.
                                </p>

                                <p>
                                TDD implemented using Jest, Postman and React Testing Library.
                                </p>
                                
                            </div>

                            <div className="flex flex-col justify-evenly items-center mt-10">

                                <div className="grid grid-cols-4 gap-2 mobile:gap-4 tablet:gap-6 laptop:gap-10">
                                    {/* <div className="italic text-md tablet:text-lg">Built With </div> */}
                                    <Image src={ReactLogo} alt = "" className="w-10 h-10 object-contain tablet:h-12 tablet:w-12"></Image>
                                    <Image src={FirebaseLogo} alt = "" className="w-10 h-10 object-contain tablet:h-12 tablet:w-12"></Image>
                                    <Image src={NodeJSLogo} alt = "" className="w-10 h-10 object-contain tablet:h-12 tablet:w-12"></Image>
                                    <Image src={MaterialLogo} alt = "" className="w-10 h-10 object-contain tablet:h-12 tablet:w-12"></Image>

                                    <IconButton href="https://nusmarkt-41131.web.app/" target="_blank" className="dark:text-white">
                                        <LinkIcon className="text-3xl mobile:text-4xl">
                                        </LinkIcon>
                                    </IconButton>

                                    <IconButton href="https://docs.google.com/document/d/1MkAb8uMavzOOteTONktakfjtdPhthOhdpxUh5aZFIfQ/edit?usp=drive_link" target="_blank" className="dark:text-white">
                                        <DescriptionIcon className="text-3xl mobile:text-4xl">
                                        </DescriptionIcon>
                                    </IconButton>

                                    <IconButton href="https://drive.google.com/file/d/1GDoPIE_RTYytAu8y5CaUiuNg90mhbN-L/view?usp=sharing" target="_blank" className="dark:text-white">
                                        <PlayCircleOutlineIcon className="text-3xl mobile:text-4xl">
                                        </PlayCircleOutlineIcon>
                                    </IconButton>

                                    <IconButton href="https://github.com/jaejayrome/NUSMarkt" target="_blank" className="dark:text-white">
                                        <GitHubIcon className="text-3xl mobile:text-4xl">
                                        </GitHubIcon>
                                    </IconButton>
                                </div>

                            </div>

                            
                         </div>

                </div>

                </div>
            </div>
        </div>
    )
}