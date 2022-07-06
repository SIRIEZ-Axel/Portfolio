export default function Contact(){
    return(
        <div className="h-screen">
            <div className="w-11/12 flex items-center pt-36">
                <h2 className="text-6xl dark:text-white duration-500 px-8">Contact</h2>
                <span className="border-solid border-b-2 w-44 border-cyan-600 "></span>
            </div>
            <div className="h-3/4 flex flex-col items-center justify-center">
                <form action="#" method="GET" className="flex flex-col gap-8">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="mail" name="name" placeholder="e-mail"/>
                    <input type="text" name="message" placeholder="Message" />
                </form>
            </div>
        </div>
    )
}