export default function Header() {
    return (
        <header>
            <nav >
                <ul className="flex justify-evenly p-8 bg-indigo-500">
                    <li className="text-white text-3xl cursor-pointer hover:bg-black hover:bg-opacity-20 p-2 rounded-lg">My Projects</li>
                    <li className="text-white text-3xl cursor-pointer hover:bg-black hover:bg-opacity-20 p-2 rounded-lg">My skills</li>
                    <li className="text-white text-3xl cursor-pointer hover:bg-black hover:bg-opacity-20 p-2 rounded-lg">Contact</li>
                </ul>
            </nav>
        </header>
    )
}