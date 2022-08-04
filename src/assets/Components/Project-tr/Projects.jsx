import "./style/table.css"
import PHP from "./img/PHP-logo.png"
import MySql from "./img/MySQL.png"
import SASS from "./img/SASS-logo.png"
import Tailwind from "./img/tailwind-css.svg"
import Html from "./img/HTML-logo.jpg"
import Javascript from "./img/javascript.png"

export default function Projects() {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-12">
            <div className="flex items-center justify-center">
                <span className="border-solid border-b-2 w-44 border-cyan-600"></span>
                <h2 className="text-5xl dark:text-white duration-500 px-8">My projects</h2>
                <span className="border-solid border-b-2 w-44 border-cyan-600"></span>
            </div>
            <table className="text-4xl w-11/12 table-auto">
                <tr className="border-b-2 border-solid border-cyan-600 py-12  dark:text-white">
                    <th>Date</th>
                    <th>Project name</th>
                    <th>Tech used</th>
                    <th>type of projects</th>
                </tr>
                <tr className="border-b-2 border-solid border-cyan-600 py-12 dark:text-white">
                    <td>29 - 04 - 22</td>
                    <td><a href="https://github.com/SIRIEZ-Axel/hackers-poulette" target="blank">Hackers Poulette ™</a></td>
                    <td className="flex gap-4">
                        <img src={PHP} width="60"></img>
                        <img src={MySql} width="60"></img>
                        <img src={SASS} width="60"></img>
                        <img src={Tailwind} width="60"></img>
                    </td>
                    <td>Contact form</td>
                </tr>
                <tr className="border-b-2 border-solid border-cyan-600 py-12 dark:text-white">
                    <td>11 - 03 - 22</td>
                    <td><a href="https://siriez-axel.github.io/Hangman/" target="blank">Hangman</a></td>
                    <td className="flex gap-4 justify-center">
                        <img src={Html} width="60"></img>
                        <img src={SASS} width="60"></img>
                        <img src={Javascript} width="60"></img>
                    </td>
                    <td>Game of Hangman</td>
                </tr>
            </table>
        </div>
    )
}