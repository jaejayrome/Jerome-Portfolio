import NextLogo from '../images/nextjs-icon.svg';
import TailwindLogo from '../images/tailwindd.png'
import Image from 'next/image';

export default function Footer() {
    return (
        <div className='flex flex-row space-y-0 space-x-2 iphone:flex-row justify-center items-center iphone:space-y-0 iphone:space-x-4 text-left bg-slate-200 dark:bg-slate-600 w-full p-4'>
        <div className='text-black dark:text-white'>
            &#xA9; 2023 By Jerome Goh Using
        </div>

        <div className='flex flex-row space-x-2'>
        <Image src = {NextLogo} alt='' className='w-8 h-8 object-contain'></Image>
        <Image src = {TailwindLogo} alt='' className='w-8 h-8 object-contain'></Image>
        </div>
    </div> 
    )
}