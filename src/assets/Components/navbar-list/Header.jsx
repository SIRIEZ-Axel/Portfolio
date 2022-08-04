import Listitem from "./list-item";
import Nav from "./Nav"
import "./style/nav.css"

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
            <nav className="fixed z-30 w-full duration-300" id="navbar">
                <Nav />
                <ul className="flex justify-evenly p-4 bg-blue-500 dark:bg-gray-800 duration-500">
                    <Listitem text="My projects"/>
                    <Listitem text="My skills"/>
                    <Listitem text="Contact"/>
                    <Listitem text="About"/> 
                </ul>
            </nav>
        </header>
    )
}