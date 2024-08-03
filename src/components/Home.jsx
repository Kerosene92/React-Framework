// import React from 'react'
import avatarImage from "../assets/avataaars.svg"
export default function Home() {
return (
    <div className="min-h-[90vh] bg-teal-500 flex flex-col justify-center items-center content-center text-white">
        <img src={avatarImage} className="w-full h-full max-h-56 max-w-52 my-4" alt="" />
        <h1 className="font-bold uppercase text-4xl mx-4 inline-block">Start framework</h1>
        <span className='relative'>
            <div className="after:h-1 after:w-24 after:bg-white after:absolute after:left-10 after:top-1/2 before:h-1 before:w-24 before:bg-white before:absolute before:right-10 before:top-1/2">
                <i className="fa-solid fa-star py-2"></i>
            </div>
        </span>
        <p className="text-[0.75em]">Graphic Artist - Web Designer - Illustrator</p>
    </div>
)
}
