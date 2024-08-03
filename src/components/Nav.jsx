
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
export default function Nav() {
    let [isOpen,setIsOpen] = useState(false)
    let alterClass = function() {
        let ww = document.body.clientWidth;
        let elements = document.getElementById('nav-items');
        if (ww > 768) {
            elements.classList.remove('open');
            elements.classList.remove('close');
        } 
    };
    useEffect(() => {
        window.addEventListener("resize", alterClass);
        },[])
    let toggleSlide = () => {
        console.log(isOpen);
        setIsOpen(!isOpen)
        if( isOpen){
            document.getElementById('nav-items').classList.remove('close')
            document.getElementById('nav-items').classList.add('open')
        }
        else{
            document.getElementById('nav-items').classList.remove('open')
            document.getElementById('nav-items').classList.add('close')
        }
    }  
return (
    <nav className="sticky top-0 left-0 w-full z-10 right-0">
        <div className="flex flex-wrap items-center justify-around mx-auto p-4 bg-slate-700">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="uppercase text-3xl font-bold text-white">Start framework</span>
            </Link>
            <button onClick={toggleSlide} className="z-20 md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" type="button">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1h15M1 7h15M1 13h15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            </svg>
            </button>
            <div id='nav-items' className='absolute md:relative md:block md:w-auto left-0 w-full -z-50 md:z-20 bg-slate-700' style={{bottom: 0, transition: "transform 2s ease" }}>
                    <ul className="font-medium flex flex-col items-center p-4 md:p-0 bg-slate-700 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-slate-700">
                        <li>
                        <NavLink to="./About" className="block text-white py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:px-4 md:py-2 hover:bg-transparent">About</NavLink>
                        </li>
                        <li>
                        <NavLink to="./Portfolio" className="block text-white py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:px-4 md:py-2 hover:bg-transparent">Portfolio</NavLink>
                        </li>
                        <li>
                        <NavLink to="./Contact" className="block text-white py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:px-4 md:py-2 hover:bg-transparent">Contact</NavLink>
                        </li>
                    </ul>
            </div>
        </div>
        </nav>
)
}
