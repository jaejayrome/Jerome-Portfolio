import Image from "next/image"
import Next from '../images/nextjs-icon.svg'
import ReactLogo from '../images/react-logo.png'
// import JavaLogo from '../images/java_logo3.jpeg'
import JavasriptLogo from '../images/javascript_logo.webp'
import PythonLogo from '../images/pyt.png'
import DockerLogo from '../images/docker12.webp'
import TailwindLogo from '../images/tailwindd.png'
import MuiLogo from '../images/mui_logo.png'
import MongoDBLogo from '../images/mongodbt.png'
import NodeLogo from '../images/node_real.png'
import FastLogo from '../images/fastest.png'
import PostgresLogo from '../images/postgret.png'
import JavaLogo from '../images/javaa.png'
import TypescriptLogo from '../images/tts.png'
import PrismaLogo from '../images/prismal.png'
import GitLogo from '../images/git_logo.png'
import GitHubLogo from '../images/gitty.png'


export default function Tools() {

    return (
        <div>
            <div className="text-slate-600  dark:text-white text-4xl font-bold font-topLeft mb-2 ">Proficient In </div>
        <div className="grid grid-cols-2 gap-4 p-5">

            <div className="bg-gradient-to-r from-indigo-400 to-teal-400 p-[4px] relative rounded-lg">
                <div className="flex flex-col justify-around items-center space-y-5 text-white py-8 px-6 text-center rounded-xl shadow-card">
                    <div className="tablet:text-xl font-bold text-lg">
                        Frontend
                    </div>
        
                    <div className="grid grid-cols-1 text-sm tablet:grid-cols-2 gap-6 tablet:text-lg"> 
                        <div className="flex flex-row space-x-2">
                            <Image src = {Next} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                Next.js
                            </div>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <Image src = {ReactLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                React.js
                            </div>
                        </div>


                        <div className="flex flex-row space-x-2">
                            <Image src = {TailwindLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                Tailwind CSS
                            </div>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <Image src = {MuiLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                Material UI
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>


            <div className="bg-gradient-to-r from-[#9600FF] to-[#AEBAF8] p-[4px] relative rounded-lg overflow-hidden">
                <div className="flex flex-col justify-around items-center space-y-5 text-white py-8 px-6 text-center rounded-xl shadow-card">
                    <div className="tablet:text-xl font-bold text-lg">
                        Backend
                    </div>
        
                    <div className="grid grid-cols-1 text-sm tablet:grid-cols-2 gap-6 tablet:text-lg "> 
                        <div className="flex flex-row space-x-2">
                            <Image src = {NodeLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12 object-contain"/>
                            <div className="pt-2 tablet:pt-4">
                                Node.js
                            </div>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <Image src = {MongoDBLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                MongoDB
                            </div>
                        </div>


                        <div className="flex flex-row space-x-2">
                            <Image src = {FastLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                 FastAPI
                            </div>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <Image src = {PostgresLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2  tablet:pt-4">
                            PostgreSQL
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>



            <div className="bg-gradient-to-r from-[#EEBD89] to-[#D13ABD] p-[4px] relative rounded-lg">
                <div className="flex flex-col justify-around items-center space-y-5 text-white py-8 px-6 text-center rounded-xl shadow-card">
                    <div className="tablet:text-xl font-bold text-lg">
                        Languages
                    </div>
        
                    <div className="grid grid-cols-1 text-sm tablet:grid-cols-2 gap-6 tablet:text-xl"> 
                        <div className="flex flex-row space-x-2">
                            <Image src = {TypescriptLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                Typescript
                            </div>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <Image src = {JavasriptLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                Javascript
                            </div>
                        </div>


                        <div className="flex flex-row space-x-2">
                            <Image src = {PythonLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                Python
                            </div>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <Image src = {JavaLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                Java
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>


            <div className="bg-gradient-to-r from-[#F6EA41] to-[#F048C6] p-[4px] relative rounded-lg">
                <div className="flex flex-col justify-around items-center space-y-5 text-white py-8 px-6 text-center rounded-xl shadow-card">
                    <div className="tablet:text-xl font-bold text-lg">
                        Tools
                    </div>
        
                    <div className="grid grid-cols-1 text-sm tablet:grid-cols-2 gap-6 tablet:text-xl"> 
                        <div className="flex flex-row space-x-2">
                            <Image src = {DockerLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                Docker
                            </div>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <Image src = {PrismaLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                Prisma
                            </div>
                        </div>


                        <div className="flex flex-row space-x-2">
                            <Image src = {GitLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                Git
                            </div>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <Image src = {GitHubLogo} alt="" className="w-10 h-10 tablet:w-12 tablet:h-12"/>
                            <div className="pt-2 tablet:pt-4">
                                GitHub
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

            
            
        </div>
        </div>
    )

}