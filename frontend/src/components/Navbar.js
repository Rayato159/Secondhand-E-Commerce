import { useState } from 'react'

const Navbar = () => {

    const [showToggleBar, setShowToggleBar] = useState(false)

    const toggleBarEvent = () => {
        return setShowToggleBar(!showToggleBar)
    }

    return (
        <nav className="bg-slate-800 sticky top-0 w-full">
            <div className="max-w-6xl mx-auto">
                <div className="flex text-white justify-between">

                    <div className="flex space-x-4 items-center px-4 py-2">
                        <button onClick={toggleBarEvent} className="md:hidden bg-slate-900 hover:bg-slate-700 rounded border-2 border-amber-500 hover:border-amber-400 text-amber-500 hover:text-amber-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <a className="flex items-center space-x-2 text-amber-500 hover:text-amber-400 transition duration-300" href="http://localhost:3435">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="font-bold">Mongsue</span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center py-2">
                        <div className="flex text-black px-2">
                            <input type="text" name="serch" placeholder="Search" className="bg-white h-9 px-4 pr-9 rounded-full text-sm items-center focus:outline-none" />
                            <button type="submit" className="item-center px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            </button>
                        </div>
                    </div>

                    {/* Responsive */}
                    <div className="flex space-x-8 items-center px-4 py-2">  
                        <div className="hidden md:flex space-x-4 items-center">
                            <a className="hover:text-slate-400" href="">Login</a>
                            <a className="hover:text-slate-400" href="">Register</a>
                        </div>    

                        <div className="flex space-x-4 items-center">
                            <a className="font-bold text-amber-900 bg-amber-500 hover:bg-amber-400 hover:scale-105 transition duration-300 px-3 py-2.5 rounded" href="">
                                ลงขาย
                            </a>
                        </div>
                    </div>

                </div>

                {/* Toggle menu */}
                {showToggleBar?
                    <div className="md:hidden">
                        <div className="flex text-black px-2 my-4">
                            <input type="text" name="serch" placeholder="Search" className="bg-white h-8 px-4 pr-8 rounded-full text-sm items-center focus:outline-none"/>
                            <button type="submit" className="items-center px-2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                        <a className="block text-white text-sm px-4 py-2 h-10 hover:bg-slate-600" href="">Login</a>
                        <a className="block text-white text-sm px-4 py-2 h-10 hover:bg-slate-600" href="">Register</a>
                    </div>
                :null}
            </div>
        </nav>
    )
}

export default Navbar