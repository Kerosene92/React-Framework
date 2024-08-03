import { useState } from "react"
import image1 from "../assets/poert1.png"
import image2 from "../assets/port2.png"
import image3 from "../assets/port3.png"

export default function Portfolio() {
    let [imgSrc, setImgSrc] = useState("")
    function handleClick(e){
        console.log("clicked");
        document.getElementById("overlay").style.display = "inline-block"
        setImgSrc(e.target.previousSibling.getAttribute("src"))
    }
    function handleOverlayClick(){
        document.getElementById("overlay").style.display = "none"
    }
return (
    <>
        <div className="flex flex-col justify-center items-center">
            <h1 className="mt-8 font-bold uppercase text-5xl mx-4 inline-block text-slate-700 text-center">Portfolio component</h1>
            <span className='relative text-slate-700 mb-8'>
                <div className="after:h-1 after:w-24 after:bg-slate-700 after:absolute after:left-10 after:top-1/2 before:h-1 before:w-24 before:bg-slate-700 before:absolute before:right-10 before:top-1/2">
                    <i className="fa-solid fa-star py-2 after:clear"></i>
                </div>
            </span>
        </div>
        <div className="relative flex justify-center items-center">
        <div className="min-h-[90vh] flex flex-row justify-between items-center flex-wrap w-[80%]">
            <div className="max-w-[80%] md:max-w-[30%] relative m-5 group">
                <img className="w-full h-full " src={image1} alt="" />
                <div onClick={(e)=>handleClick(e)} className="absolute left-0 top-0 h-full w-full cursor-pointer transition-all duration-300 flex opacity-0 group-hover:opacity-95 justify-center items-center bg-emerald-400 text-white text-7xl"><i className="opacity-100 fa-solid fa-plus"></i></div>
            </div>
            <div className="max-w-[80%] md:max-w-[30%] relative m-5 group">
                <img className="w-full h-full" src={image2} alt="" />
                <div onClick={(e)=>handleClick(e)} className="absolute left-0 top-0 h-full w-full cursor-pointer transition-all duration-300 flex opacity-0 group-hover:opacity-95 justify-center items-center bg-emerald-400 text-white text-7xl"><i className="opacity-100 fa-solid fa-plus"></i></div>
            </div>
            <div className="max-w-[80%] md:max-w-[30%] relative m-5 group">
                <img className="w-full h-full" src={image3} alt="" />
                <div onClick={(e)=>handleClick(e)} className="absolute left-0 top-0 h-full w-full cursor-pointer transition-all duration-300 flex opacity-0 group-hover:opacity-95 justify-center items-center bg-emerald-400 text-white text-7xl"><i className="opacity-100 fa-solid fa-plus"></i></div>
            </div>
            <div className="max-w-[80%] md:max-w-[30%] relative m-5 group">
                <img className="w-full h-full" src={image1} alt="" />
                <div onClick={(e)=>handleClick(e)} className="absolute left-0 top-0 h-full w-full cursor-pointer transition-all duration-300 flex opacity-0 group-hover:opacity-95 justify-center items-center bg-emerald-400 text-white text-7xl"><i className="opacity-100 fa-solid fa-plus"></i></div>
            </div>
            <div className="max-w-[80%] md:max-w-[30%] relative m-5 group">
                <img className="w-full h-full" src={image2} alt="" />
                <div onClick={(e)=>handleClick(e)} className="absolute left-0 top-0 h-full w-full cursor-pointer transition-all duration-300 flex opacity-0 group-hover:opacity-95 justify-center items-center bg-emerald-400 text-white text-7xl"><i className="opacity-100 fa-solid fa-plus"></i></div>
            </div>
            <div className="max-w-[80%] md:max-w-[30%] relative m-5 group">
                <img className="w-full h-full" src={image3} alt="" />
                <div onClick={(e)=>handleClick(e)} className="absolute left-0 top-0 h-full w-full cursor-pointer transition-all duration-300 flex opacity-0 group-hover:opacity-95 justify-center items-center bg-emerald-400 text-white text-7xl"><i className="opacity-100 fa-solid fa-plus"></i></div>
            </div>
        </div>
    <div id="overlay" className="absolute hidden left-0 top-0 right-0 bottom-0 h-full w-full z-20 ">
        <div onClick={handleOverlayClick} className="fixed top-0 left-0 bg-[#00c7ff4d] h-full w-full z-30">
            <img className="fixed max-w-[50%] max-h-[50%] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-full w-full" src={imgSrc} alt=""/>
        </div>
    </div>
    </div>
    </>
)
}
