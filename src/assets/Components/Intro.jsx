import Header from "./Header";
import Hand from "../img/hand.png"
import Facebook from "../img/facebook.png"
import Linkedin from "../img/linkedin.png"
import Github from "../img/github.png"
import Profil from "../img/profil.jpg"

export default function Intro() {
    return (
        <div >
            <Header />
            <div className="h-screen absolute flex items-center left-28">
                <div className="border-solid border-slate-800 border-4 rounded-full dark:border-white duration-500 ">
                    <img src={Profil} width="400" alt="photo de profil" className="rounded-full" />
                </div>
            </div>
            <div className="h-screen flex flex-col items-center justify-center gap-8">
                <div>
                    <h2 className="text-6xl flex hover:scale-150 hover:bg-slate-200 hover:dark:bg-slate-600 p-4 rounded-xl duration-300 dark:text-white">Hello <img src={Hand} alt="hello" width="60px" /> ,</h2>
                </div>
                <div>
                    <h2 className="text-6xl hover:scale-150 hover:bg-slate-200 hover:dark:bg-slate-600 p-4 rounded-xl dark:text-white duration-300">I'm Axel Siriez</h2>
                </div>
                <div>
                    <h3 className="text-3xl hover:scale-150 hover:bg-slate-200 hover:dark:bg-slate-600 p-4 rounded-xl dark:text-white duration-300">Front-End Developer</h3>
                </div>
                <div>
                    <ul className="flex gap-12">
                        <li className="rounded-xl p-2"><a href="https://fr-fr.facebook.com/axel.siriez" target="_blank"><img src={Facebook} alt="facebook-logo" width="30px" className="opacity-50 hover:opacity-100" /></a></li>
                        <li className="rounded-xl p-2"><a href="https://www.linkedin.com/in/axel-siriez-web-dev/" target="_blank"><img src={Linkedin} alt="linkedin-logo" width="30px" className="opacity-50 hover:opacity-100" /></a></li>
                        <li className="rounded-xl p-2"><a href="https://github.com/SIRIEZ-Axel" target="_blank"><img src={Github} alt="github-logo" width="30px" className="opacity-50 hover:opacity-100" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}