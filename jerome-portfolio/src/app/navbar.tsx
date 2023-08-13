import { Link } from "react-scroll";
import { motion, animate, stagger, easeIn } from "framer-motion";
import { useEffect } from "react";


export default function Navbar() {


    const staggerLinks = stagger(0.1, { ease: easeIn, startDelay: 0.1 });

    useEffect(() => {
        animate(".links", {opacity: 1, scale: 1.15, filter: "blur(0px)"}, {duration: 0.2, delay: staggerLinks})
    }, [])

   


    return (
        <ul className="flex flex-row text-lg justify-evenly p-4 text-white tablet:text-xl overflow-hidden space-x-2">
       
                <Link to = "about" spy={true} smooth={true} offset={300} duration={500} className="hover:bg-cyan-400 dark:hover:bg-purple-400 rounded-xl px-2 py-6 bg-black shadow-cyan-400 dark:shadow-purple-400 shadow-2xl mobile:px-6 mobile:py-10 links"> About</Link>

                <div className="flex justify-center items-center links">
                <Link to = "about" spy={true} smooth={true} offset={300} duration={500} className="hover:bg-cyan-400 dark:hover:bg-purple-400 rounded-xl px-2 py-6 bg-black shadow-cyan-400 dark:shadow-purple-400  shadow-2xl mobile:px-6 mobile:py-10"> Experience</Link>
                </div>

                <div className="flex justify-center items-center links">
                <Link to = "about" spy={true} smooth={true} offset={300} duration={500} className="hover:bg-cyan-400 dark:hover:bg-purple-400 rounded-xl px-2 py-6 bg-black shadow-cyan-400 dark:shadow-purple-400  shadow-2xl mobile:px-6 mobile:py-10"> Projects</Link>
                </div>

                <div className="flex justify-center items-center links">
                <Link to = "about" spy={true} smooth={true} offset={300} duration={500} className="hover:bg-cyan-400 dark:hover:bg-purple-400 rounded-xl px-2 py-6 bg-black shadow-cyan-400 dark:shadow-purple-400  shadow-2xl mobile:px-6 mobile:py-10"> Contact </Link>
                </div>

        </ul>
    )
}