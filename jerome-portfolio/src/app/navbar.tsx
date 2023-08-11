import { Link } from "react-scroll"

export default function Navbar() {
    return (
        <div className="flex flex-row text-xl justify-evenly p-4 text-white tablet:text-3xl overflow-hidden space-x-2">
            <div className="rounded-xl px-2 py-6 bg-black shadow-purple-400 shadow-2xl mobile:px-6 mobile:py-10">
                <Link to = "about" spy={true} smooth={true} offset={300} duration={500}> About</Link>
            </div>
         
            <div className="rounded-xl px-2 py-6 bg-black shadow-purple-400 shadow-2xl mobile:px-6 mobile:py-10">
                <Link to = "about" spy={true} smooth={true} offset={300} duration={500}> Experience </Link>
            </div>
            <div className="rounded-xl px-2 py-6 bg-black shadow-purple-400 shadow-2xl mobile:px-6 mobile:py-10">
                <Link to = "about" spy={true} smooth={true} offset={300} duration={500}> Projects </Link>
            </div>
            <div className="rounded-xl px-2 py-6 bg-black shadow-purple-400 shadow-2xl mobile:px-6 mobile:py-10">
                <Link to = "about" spy={true} smooth={true} offset={300} duration={500}> Contact  </Link>
            </div>
           

        </div>
    )
}