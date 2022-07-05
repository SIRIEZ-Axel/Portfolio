import "../style/table.css";

export default function Projects() {
    return (
        <div className="h-screen flex flex-col justify-center gap-12">
            <div className="flex items-center justify-center">
                <span className="border-solid border-b-2 w-44 border-cyan-600"></span>
                <h2 className="text-6xl dark:text-white duration-500 px-8">My projects</h2>
                <span className="border-solid border-b-2 w-44 border-cyan-600"></span>
            </div>
            <div className="flex justify-center items-center">
                <table className="text-4xl w-11/12 ">
                    <tr className="border-b-2 border-solid border-cyan-600 p-8  dark:text-white">
                        <th>Date</th>
                        <th>Project name</th>
                        <th>Tech used</th>
                        <th>type of projects</th>
                    </tr>
                    <tr className="border-b-2 border-solid border-cyan-600 p-8 dark:text-white">
                        <td>td1</td>
                        <td>td2</td>
                        <td>td3</td>
                        <td>td4</td>
                    </tr>
                    <tr className="border-b-2 border-solid border-cyan-600 p-8 dark:text-white">
                        <td>td1</td>
                        <td>td2</td>
                        <td>td3</td>
                        <td>td4</td>
                    </tr>
                    <tr className="border-b-2 border-solid border-cyan-600 p-8 dark:text-white">
                        <td>td1</td>
                        <td>td2</td>
                        <td>td3</td>
                        <td>td4</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}