import {motion} from 'framer-motion';
import FaceLogo from '../images/face.png'
import Image from 'next/image';

export default function About() {
    const texts = [
        "Year 2 Information Systems student with a second major in Quantitative Finance studying at the National University of Singapore.",
        "I enjoy coding as a hobby because nothing in the world is more satisfying than solving bugs. ",
        "My first experience with code was self learning Java after my national service.",
        "Asides from that, I currently learn Korean as a third language and plan to take my exchange studies there!"
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.1 }
        },
    };

    const child = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1, 
            x: 0,
            transition: {
                type: "spring",
                damping: 12, 
                stiffness: 100,
            }
        }
    };

    return (
        <div className='h-screen'>
            <div className="dark:text-white text-slate-600 font-topLeft text-4xl"> 
                About Me
            </div>

            <div className="flex-col flex mobile:flex-row justify-between items-center">
            
            <div className= 'p-2'>
                <Image src = {FaceLogo} alt = "" className='object-contain'></Image>
            </div>

            <motion.div className="flex flex-col max-w-1/2 text-slate-700 dark:text-slate-400 mobile:text-md tablet:text-lg laptop:text-xl overflow-hidden text-md "
                        variants={container}
                        initial="hidden"
                        animate="visible">
                {texts.map((text, index) => (
                    <div className='break-words' key={index}>
                        <div className='leading-6 my-1'>
                        {text.split(' ').map((word, wordIndex) => (
                            <motion.span className='inline-block' variants={child} key={wordIndex}>
                                {word + "\u00A0"}
                            </motion.span>
                        ))}
                        </div>
                       
                    </div>
                ))}
            </motion.div>
            </div>
            
        </div>
    )
}
