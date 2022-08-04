import Webdev from "./img/web-dev-light.png"
import Animals from "./img/animals.png"
import { useRef } from "react"

export default function About(ref) {
    const aboutSection = useRef(null);
    return (
        <div className="h-screen" ref={aboutSection}>
            <div className="h-screen flex">
                <div className="w-1/2 flex justify-center items-center ">
                        <span className="border-solid border-b-2 w-44 border-cyan-600 "></span>
                        <h2 className="text-5xl dark:text-white duration-500 ml-8">About me</h2>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center gap-12">
                    <p className="w-2/4 text-2xl text-white duration-500 bg-cyan-500 rounded-md p-6 px-10 shadow-2xl leading-10 hover:scale-110">
                        Hello everyone,
                        After 3 years dedicated to animal care, I decided to reorient myself towards my other passion: web development. I particularly appreciate this job because it allows me to learn continuously, to see the evolution of my work (web design) and to use my resourcefulness and my thirst to surpass myself every day.
                    </p>
                    <div className="flex gap-12">
                        <img src={Webdev} alt="web dev" width="80" />
                        <img src={Animals} alt="web dev" width="80" />
                    </div>
                </div>
            </div>
        </div>
    )
}