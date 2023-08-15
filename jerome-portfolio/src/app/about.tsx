import {motion} from 'framer-motion';
import FaceLogo from '../images/face.png'
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { useTheme } from 'next-themes';
import { CircularProgress, Box, Typography } from '@mui/material';
import AlignLeftLightIcon from '../images/align_light.png'
import AlignLeftDarkIcon from '../images/align_dark.png'
import TypeScriptFileIcon from '../images/typescript_file.svg'

export default function About() {
    const {theme, setTheme} = useTheme()
    const ProgressCircle = styled(CircularProgress)`
        font-size: 2.5rem;
    `;
    const texts = [
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

            <div className="flex-col justify-center items-center">
                <div className="flex-col flex tablet:flex-row justify-between items-center">
                    <div className= 'p-2 w-3/4 mobile:w-1/2'>
                        <Image src = {FaceLogo} alt = "" className='object-contain '></Image>
                    </div>

                    <div className="flex flex-col tablet:w-1/2 space-y-4">

                        <div className=''>
                            <div className='flex flex-row justify-start items-start space-x-1'>
                                <Image src = {TypeScriptFileIcon} alt = "" className='w-6 h-6 object-cover'></Image>
                                <div className='pt-0.5 text-sm'>
                                profile.ts
                                </div>
                            </div>
                            <div className='grid grid-cols-1 gap-3 rounded-xl border-slate-200 mobile:text-md tablet:text-lg laptop:text-xl overflow-hidden text-md'>
                                <div className='flex flex-row space-x-2'>
                                    <div className='text-[#587EA8]'>const</div>
                                    <div className = {theme === "dark" ? 'text-[#add7ff]' : 'text-purple-500'}> name </div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>:</div>
                                    <div className='text-[#32ae85]'> string </div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>=</div>
                                    <div className='text-[#e67e00]'>'Jerome Goh'</div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>;</div>
                                </div>

                                <div className='flex flex-row space-x-2'>
                                    <div className='text-[#587EA8]'>const</div>
                                    <div className = {theme === "dark" ? 'text-[#add7ff]' : 'text-purple-500'}> age </div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>:</div>
                                    <div className='text-[#32ae85]'> number </div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>=</div>
                                    <div className={theme === "dark" ? 'text-[#ADFF2F]' : 'text-pink-400' }>22</div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>;</div>
                                </div>

                                <div className='flex flex-row space-x-2'>
                                    <div className='text-[#587EA8]'>const</div>
                                    <div className = {theme === "dark" ? 'text-[#add7ff]' : 'text-purple-500'}> unviersity </div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>:</div>
                                    <div className='text-[#32ae85]'> string </div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>=</div>
                                    <div className='text-[#e67e00]'>'National University of Singapore'
                                    <div className={theme === "dark" ? 'text-white inline-block' : 'text-black inline-block'}>&nbsp;;</div>
                                    </div>
                                
                                </div>

                                <div className='flex flex-row space-x-2'>
                                    <div className='text-[#587EA8]'>const</div>
                                    <div className = {theme === "dark" ? 'text-[#add7ff]' : 'text-purple-500'}> primary_major </div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>:</div>
                                    <div className='text-[#32ae85]'> string </div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>=</div>
                                    <div className='text-[#e67e00]'>'Information Systems'
                                    <div className={theme === "dark" ? 'text-white inline-block' : 'text-black inline-block'}>&nbsp;;</div>
                                    </div>
                          
                                </div>

                                <div className='flex flex-row space-x-2'>
                                    <div className='text-[#587EA8]'>const</div>
                                    <div className = {theme === "dark" ? 'text-[#add7ff]' : 'text-purple-500'}> secondary_major </div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>:</div>
                                    <div className='text-[#32ae85]'> string </div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>=</div>
                                    <div className='text-[#e67e00]'>'Quantitative Finance'
                                    <div className={theme === "dark" ? 'text-white inline-block' : 'text-black inline-block'}>&nbsp;;</div>
                                    </div>
                                 
                                </div>

                                <div className='flex flex-row space-x-2'>
                                    <div className='text-[#587EA8]'>const</div>
                                    <div className = {theme === "dark" ? 'text-[#add7ff]' : 'text-purple-500'}> specialisation </div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>:</div>
                                    <div className='text-[#32ae85]'> string </div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>|</div>
                                    <div className='text-[#32ae85]'> null </div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>=</div>
                                    <div className='text-[#587EA8]'>null</div>
                                    <div className={theme === "dark" ? 'text-white' : 'text-black'}>;</div>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <div className='flex flex-row justify-start items-start space-x-1'>
                                <Image src = {theme === "light" ? AlignLeftLightIcon : AlignLeftDarkIcon} alt = "" className='w-6 h-6 object-cover'></Image>
                                <div className='pt-0.5 text-sm'>
                                description.txt
                                </div>
                            </div>
                            <motion.div className='text-slate-700 dark:text-slate-400 mobile:text-md tablet:text-lg laptop:text-xl overflow-hidden text-md' variants={container}
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

                    
                </div>

             
                

                <div className="grid grid-cols-2 gap-4 mt-5">
                    <div className='flex flex-col justify-center items-center'>
                        <div className='mb-2'> Year of Study </div>
                        <Box sx={{ position: 'relative', display: 'inline-flex', flexShrink: 0, flexGrow: 0}}>
                            <CircularProgress className = "" variant='determinate' value={50} size='5rem'></CircularProgress>
                            <Box
                            sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}
                        >
                            <Typography variant="caption" component="div" fontSize='1rem'>
                            {`2 / 4`}
                            </Typography>
                            </Box>
                        </Box>
                    </div>


                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-center mb-2'> Current GPA </div>
                        <Box sx={{ position: 'relative', display: 'inline-flex', flexShrink: 0, flexGrow: 0}}>
                            <CircularProgress variant='determinate' value={92.8} size='5rem'></CircularProgress>
                            <Box
                            sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}
                        >
                            <Typography variant="caption" component="div" fontSize='1rem'>
                            {`4.64 / 5`}
                            </Typography>
                            </Box>
                        </Box>
                    </div>


                    <div className='flex flex-col justify-center items-center'>
                        <div className='mb-2'> Modular Credits Completed </div>
                        <Box sx={{ position: 'relative', display: 'inline-flex', flexShrink: 0, flexGrow: 0}}>
                            <CircularProgress variant='determinate' value={31.25} size='5rem'></CircularProgress>
                            <Box
                            sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}
                        >
                            <Typography variant="caption" component="div" fontSize='1rem'>
                            {`50 / 160`}
                            </Typography>
                            </Box>
                        </Box>
                    </div>


                    <div className='flex flex-col justify-center items-center'>
                        <div className='mb-2'> Enthusiasm towards Learning </div>
                        <Box sx={{ position: 'relative', display: 'inline-flex', flexShrink: 0, flexGrow: 0}}>
                            <CircularProgress variant='determinate' value={100} size='5rem'></CircularProgress>
                            <Box
                            sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}
                        >
                            <Typography variant="caption" component="div" fontSize='1rem'>
                            {`100%`}
                            </Typography>
                            </Box>
                        </Box>
                    </div>
                </div>
                
                



            </div>
            
        </div>
    )
}
