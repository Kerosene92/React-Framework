// import React from 'react'

export default function About() {
return (
    <div className="min-h-[90vh] bg-teal-500 flex flex-col justify-center items-center content-center text-white">
        <h1 className="font-bold uppercase text-5xl mx-4 inline-block text-center">About Component</h1>
        <span className='relative'>
            <div className="after:h-1 after:w-24 after:bg-white after:absolute after:left-10 after:top-1/2 before:h-1 before:w-24 before:bg-white before:absolute before:right-10 before:top-1/2">
                <i className="fa-solid fa-star py-2 after:clear"></i>
            </div>
        </span>
        <div className=" flex flex-row justify-center max-w-3/4 md:max-w-1/2 flex-wrap">
            <p className="text-[0.75em] px-2 py-4 w-[80%] md:max-w-[30%]">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className="text-[0.75em] px-2 py-4 w-[80%] md:max-w-[30%]">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
    </div>
)
}
