import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

export default function Contact(){

    const GitHub = styled(GitHubIcon)`
        font-size: 40px;
    `

    const Email = styled(EmailIcon)`
        font-size: 40px;
    `

    const LinkedIn = styled(LinkedInIcon)`
        font-size: 40px;
    `
    return (
        <div className="h-screen">
            <div className="font-topLeft text-4xl mobile:text-4xl">
                Contact Me
            </div>

            <div className='mt-20 flex flex-col justify-center items-center space-y-2 text-md mobile:text-lg tablet:text-xl'>
                <div className="">
                    I&apos;m looking for more opportunities in the tech space.
                </div>

                <div className='flex flex-col laptop:flex-row laptop:space-x-3'>
                        <div>
                            <span className="text-transparent bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text">Frontend Engineer</span> &nbsp; <span className="bg-gradient-to-r from-[#9600FF] to-[#AEBAF8] bg-clip-text text-transparent">Backend Engineer</span> 
                        </div>

                        <div>
                            <span className="bg-gradient-to-r from-[#EEBD89] to-[#D13ABD] bg-clip-text text-transparent">Full Stack Engineer</span> &nbsp; <span className="bg-gradient-to-r from-[#F6EA41] to-[#F048C6] bg-clip-text text-transparent">Data Scientist</span>
                        </div>
                        
                </div>
                
                <div>
                Feel free to contact me via the following channels
                </div>

                <div className="flex flex-row justify-start items-start space-x-6">
                    <IconButton href='https://github.com/jaejayrome' target='_blank'>
                        <GitHub className='text-black dark:text-white'/>
                    </IconButton>
                    
                    <IconButton href='https://www.linkedin.com/in/jerome-goh-9a8406174/' target='_blank'>
                        <LinkedIn className='text-black dark:text-white'/>
                    </IconButton>

                    <IconButton href='mailto:jerome.goh.jg@gmail.com' target='_blank'>
                        <Email className='text-black dark:text-white'/>
                    </IconButton>
                
                </div>
            </div>
        </div>
    )
}