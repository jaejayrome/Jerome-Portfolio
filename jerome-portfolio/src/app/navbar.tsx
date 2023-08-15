import { Link } from "react-scroll";
// import { motion, animate, stagger, easeIn } from "framer-motion";
// import { useEffect } from "react";


export default function Navbar() {


    // const staggerLinks = stagger(0.1, { ease: easeIn, startDelay: 0.1 });

    // useEffect(() => {
    //     animate(".links", {opacity: 1, scale: 1.2, filter: "blur(0px)"}, {duration: 0.2, delay: staggerLinks})
    // }, [])

   


    return (
        <ul className="grid grid-cols-2 gap-10 mobile:grid-cols-4 justify-around items-center py-20 text-white">
                <div className=" flex justify-center items-center links text-lg mobile:text-xl tablet:text-2xl laptop:text-3xl">
                    <Link to = "about" spy={true} smooth={true} offset={-50} duration={500} className="font-topLeft"> 
                        About
                    </Link>
                </div>
                <div className="flex justify-center items-center links text-lg mobile:text-xl tablet:text-2xl laptop:text-3xl">
                <Link to = "experiences" spy={true} smooth={true} offset={-50} duration={500} className="font-topLeft"> 
                        Experience
                    </Link>
                </div>
                <div className="flex justify-center items-center links text-lg mobile:text-xl tablet:text-2xl laptop:text-3xl">
                <Link to = "projects" spy={true} smooth={true} offset={-50} duration={500} className="font-topLeft"> 
                        Projects
                    </Link>
                </div>
                <div className="flex justify-center items-center links text-lg mobile:text-xl tablet:text-2xl laptop:text-3xl">
                <Link to = "contact" spy={true} smooth={true} offset={-50} duration={500} className="font-topLeft"> 
                        Contact
                    </Link>
                </div>

        </ul>
    )
}