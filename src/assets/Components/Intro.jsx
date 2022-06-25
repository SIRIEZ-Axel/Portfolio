import Header from "./Header";
import Hand from "../img/hand.png"
import Facebook from "../img/facebook.png"
import Linkedin from "../img/linkedin.png"
import Github from "../img/github.png"
import PageNext from "./pageNext";


export default function Intro() {
    return (
        <div >
            <Header />
                <div className="h-screen flex flex-col items-center justify-center gap-12 ">
                    <div>
                        <h2 className="text-6xl flex hover:scale-150 duration-200">Hello <img src={Hand} alt="hello" width="60px" /> ,</h2>
                    </div>
                    <div>
                        <h2 className="text-6xl hover:scale-150 duration-200">I'm Axel Siriez</h2>
                    </div>
                    <div>
                        <h3 className="text-3xl hover:scale-150 duration-200">Front-End Developer</h3>
                    </div>
                    <div>
                        <ul className="flex gap-12">
                            <li><a href="#"><img src={Facebook} alt="facebook-logo" width="30px" className="opacity-50 hover:opacity-100" /></a></li>
                            <li><a href="#"><img src={Linkedin} alt="linkedin-logo" width="30px" className="opacity-50 hover:opacity-100" /></a></li>
                            <li><a href="#"><img src={Github} alt="github-logo" width="30px" className="opacity-50 hover:opacity-100" /></a></li>
                        </ul>
                    </div>
                    <PageNext />
                </div>
        </div>
    )
}