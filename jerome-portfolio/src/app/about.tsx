import {motion} from 'framer-motion';

export default function About() {
    
    const text : string = "Year 2 Information Systems student studying at the National University of Singapore";

    const letters : string[] = Array.from(text)

    const container = {
        hidden: {opacity: 0},
        visible: (i = 1) => ({
            opacity: 1, 
            transition: {staggerChildren: 0.04, delayChildren: 0.04 * i},
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
            <div className="text-white font-topLeft text-4xl"> 
                About Me
            </div>

            <motion.div className="flex flex-wrap max-w-1/2 text-slate-400" variants={container} initial= "hidden" animate= "visible">
                {letters.map((word, index) => (
                    <motion.span variants={child} key={index}>
                        {word === " " ? "\u00A0" : word}
                    </motion.span>
                ))}
                
            </motion.div>
            
        </div>
    )
}