import About from "./About";
import Nav from "./Nav"
import "../style/nav.css"

export default function Header(ref) {
    function scrollDown() {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    }
    return (
        <header>
            <nav className="absolute z-30 w-full">
                <Nav />
                <ul className="flex justify-evenly p-8 bg-gradient-to-r from-cyan-500 to-blue-500">
                    <li className=" text-3xl cursor-pointer"
                    >My Projects</li>
                    <li className=" text-3xl cursor-pointer"
                    >My skills</li>
                    <li className=" text-3xl cursor-pointer"
                    >Contact</li>
                    <li className=" text-3xl cursor-pointer"
                        onClick={() => scrollDown(About)}>About</li>
                </ul>
            </nav>
        </header>
    )
}