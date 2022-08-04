import { useState } from "react"
import Footer from "../Footer/Footer";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="h-screen">
            <div className="w-11/12 flex items-center pt-36 mb-24">
                <h2 className="text-5xl dark:text-white duration-500 px-8">Contact</h2>
                <span className="border-solid border-b-2 w-44 border-cyan-600 "></span>
            </div>
            <div class="w-full md:w-96 md:max-w-full mx-auto shadow-xl">
                <div class="p-6 bg-cyan-500 border-gray-300 sm:rounded-md">
                    <form method="POST" action="#">
                        <label class="block mb-6">
                            <span class="text-gray-700 text-lg">Your name</span>
                            <input
                                type="text"
                                name="name"
                                class="block
                                w-full
                                mt-1
                                border-gray-300
                                rounded-md
                                shadow-sm
                                p-3
                                outline-none"
                                placeholder="Joe Bloggs"
                                onChange={e => setName({ name: e.target.value })}
                            />
                        </label>
                        <label class="block mb-6">
                            <span class="text-gray-700 text-lg">Email address</span>
                            <input
                                name="email"
                                type="email"
                                class="block
                                        w-full
                                        mt-1
                                        border-gray-300
                                        rounded-md
                                        shadow-sm
                                        outline-none
                                        p-3"
                                placeholder="joe.bloggs@example.com"
                                required
                                onChange={e => setEmail({ email: e.target.value })}

                            />
                        </label>
                        <label class="block mb-6">
                            <span class="text-gray-700 text-lg">Message</span>
                            <textarea
                                name="message"
                                class="block
                                        w-full
                                        mt-1
                                        border-gray-300
                                        rounded-md
                                        shadow-sm
                                        outline-none
                                        p-3"
                                rows="3"
                                placeholder="Tell us what you're thinking about..."
                                onChange={e => setMessage({ message: e.target.value })}

                            ></textarea>
                        </label>
                        <div class="mb-6">
                            <button
                                type="submit"
                                class="h-10
                                        px-5
                                        text-indigo-100
                                        bg-cyan-600
                                        rounded-lg
                                        transition-colors
                                        duration-150
                                        focus:shadow-outline
                                        hover:bg-cyan-800"
                            >
                                Contact Us
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}