import About from "./About";
import Nav from "./Nav"

export default function Header(ref) {
    function scrollDown() {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    }
    return (
        <header>
            <nav className="fixed z-30 w-full">
            <Nav />
                <ul className="flex justify-evenly p-8 bg-gradient-to-r from-cyan-500 to-blue-500">
                    <li className="text-white text-3xl cursor-pointer hover:bg-black hover:bg-opacity-20 p-2 rounded-lg" 
                    >My Projects</li>
                    <li className="text-white text-3xl cursor-pointer hover:bg-black hover:bg-opacity-20 p-2 rounded-lg"
                    >My skills</li>
                    <li className="text-white text-3xl cursor-pointer hover:bg-black hover:bg-opacity-20 p-2 rounded-lg"
                    >Contact</li>
                    <li className="text-white text-3xl cursor-pointer hover:bg-black hover:bg-opacity-20 p-2 rounded-lg"
                    onClick={() => scrollDown(About)}>About</li>
                </ul>
            </nav>
        </header>
    )
}