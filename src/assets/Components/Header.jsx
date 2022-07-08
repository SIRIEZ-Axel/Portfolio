import Nav from "./Nav"
import "../style/nav.css"

export default function Header() {
    const scroll = document.getElementById("navbar");
    let scrollbox = 0;
    window.addEventListener("scroll", () => {
        if (window.scrollY < scrollbox) {
            scroll.style.top = 0;
        } else {
            scroll.style.top = "-150px";
        }
        scrollbox = window.scrollY;
    });

    return (
        <header>
            <nav className="fixed z-30 w-full duration-150" id="navbar">
                <Nav />
                <ul className="flex justify-evenly p-8 bg-blue-500 dark:bg-gray-800">
                    <li className=" text-3xl cursor-pointer"
                    >My Projects</li>
                    <li className="text-3xl cursor-pointer"
                    >My skills</li>
                    <li className="text-3xl cursor-pointer"
                    >Contact</li>
                    <li className="text-3xl cursor-pointer"
                    >About</li>
                </ul>
            </nav>
        </header>
    )
}