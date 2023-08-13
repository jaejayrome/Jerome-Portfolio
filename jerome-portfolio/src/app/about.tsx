import {motion} from 'framer-motion';

export default function About() {
    
    const text : string = "Year 2 Information Systems student with a second major in Quantitative Finance studying at the National University of Singapore.";
    const text2: string = "I enjoy coding as a hobby because nothing in the world is more satisfying than solving bugs. "
    const text3: string = "My first experience with code was self learning Java after my national service."
    const text4: string = "Asides from that, I currently learn Korean as a third language and plan to take my exchange studies there!";
    const letters : string[] = Array.from(text)
    const letters2: string[] = Array.from(text2)
    const letters3: string[] = Array.from(text3)
    const letters4: string[] = Array.from(text4)

    const container = {
        hidden: {opacity: 0},
        visible: (i = 1) => ({
            opacity: 1, 
            transition: {staggerChildren: 0.01, delayChildren: 0.04 * i},
        }),
    };

    const child = {
        visible: {
            opacity: 1, 
            x: 0, 
            y: 0,
            transition: {
                type: "spring",
                damping: 12, 
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0, 
            x: -20,
            y: -20, 
            transition: {
                type: "spring",
                damping: 12, 
                stiffness: 100,
            },
        }
    };


    return (
        <div>
            <div className="dark:text-white text-slate-600 font-topLeft text-4xl"> 
                About Me
            </div>

            <motion.div className="flex flex-wrap max-w-1/2 text-slate-700 dark:text-slate-400 px-6 overflow-hidden text-lg mobile:text-2xl leading-" variants={container} initial= "hidden" animate= "visible">

                <div className='flex flex-wrap'>
                {letters.map((word, index) => (
                    <motion.p variants={child} key={index}>
                        {word === " " ? "\u00A0" : word}
                    </motion.p>
                ))}
                </div>

          
                <div className='flex flex-wrap'>
                {letters2.map((word, index) => (
                <motion.p variants={child} key={index}>
                    {word === " " ? "\u00A0" : word}
                </motion.p>
                ))} 
                </div>


                <div className='flex flex-wrap'>
                {letters3.map((word, index) => (
                <motion.p variants={child} key={index}>
                    {word === " " ? "\u00A0" : word}
                </motion.p>
                ))} 
                </div>


                <div className='flex flex-wrap'>
                {letters4.map((word, index) => (
                <motion.p variants={child} key={index}>
                    {word === " " ? "\u00A0" : word}
                </motion.p>
                ))} 
                </div>

                
                
            </motion.div>
            
        </div>
    )
}