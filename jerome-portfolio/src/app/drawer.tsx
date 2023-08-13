import { useState } from "react"
import { Drawer, IconButton } from "@mui/material"
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { styled } from '@mui/material/styles';
import { useTheme } from "next-themes";
import {Link} from 'react-scroll'
// import DrawerButton from '../images/icons_422593.svg'
import DrawerButton from '../images/hamburger.jpeg'
import Image from "next/image";

export default function NavbarDrawer() {

    // this component is in charge of opening and closing the drawer for mobile layouts
    const [open, setOpen] = useState(false)
    const { theme, setTheme } = useTheme();

    const Logo = styled(ViewHeadlineIcon)`
    font-size: 2.5rem;
    `;

    const toggleDrawer = () => {
        setOpen(!open)
    }

    const styles = {
        whichMode: {
            fill:  theme === "dark" ? "white" : "black"
        }
    }

    return (
        <div>
            <IconButton className='hover:scale-110  duration-200 focus:text-purple-300' onClick={toggleDrawer}>
                <Logo style={styles.whichMode} />
            </IconButton> 

            {/* <button onClick={toggleDrawer} className="group text-white  duration-200 hover:scale-110"> 
                <Image src = {DrawerButton} alt = "" className="w-10 h-10 hover:text-purple-300"/>
            </button> */}

            <Drawer PaperProps={{sx: {width: "100%", height: "15%", backgroundColor: "black"}}} anchor="top" open={open} onClose={toggleDrawer}> 

                <ul className="grid grid-cols-2 gap-4 mt-5 mx-2"> 
                    <li className="text-white shadow-2xl shadow-purple-400 rounded-xl flex justify-center items-center"> 
                    <Link to="about" spy={true} smooth={true} offset={300} duration={500} onClick = {toggleDrawer}> About </Link>   
                    </li>
                    <li className="text-white shadow-2xl shadow-purple-400  rounded-xl flex justify-center items-center"> 
                    <Link to="about" spy={true} smooth={true} offset={300} duration={500} onClick = {toggleDrawer}> Experience </Link>   
                    </li>
                    <li className="text-white shadow-2xl shadow-purple-400 rounded-xl flex justify-center items-center"> 
                    <Link to="about" spy={true} smooth={true} offset={300} duration={500} onClick = {toggleDrawer}> Projects </Link>   
                    </li>
                    <li className="text-white shadow-2xl shadow-purple-400  rounded-xl flex justify-center items-center"> 
                    <Link to="about" spy={true} smooth={true} offset={300} duration={500} onClick = {toggleDrawer}> Contact </Link>   
                    </li>
                </ul>
            </Drawer>

        </div>
    )
}