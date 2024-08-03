
export default function Footer() {
return (
    <footer className=" w-full">
        <div className="w-full bg-slate-700 flex justify-center content-center">
            <div className="flex justify-center content-center w-[95%] md:w-[80%] bg-slate-700 py-5 after:clear-start">
                <div className="flex flex-col md:flex-row w-3/4 justify-between">
                    <div className="text-white my-4 md:my-2 flex flex-col justify-center items-center w-90% md:w-[30%]">
                        <h1 className="uppercase font-bold">Location</h1>
                        <p className="text-[0.75em]">2215 John Daniel Drive</p>
                        <p className="text-[0.75em]">Clark, MO 65243</p>
                    </div>
                    <div className="text-white my-4 md:my-2 flex flex-col justify-center items-center w-90% md:w-[30%]">
                        <h1 className="uppercase font-bold">around the web</h1>
                        <div className="mt-2">
                            <i className="border-2 rounded-full p-1 mx-1 fa-brands fa-facebook"></i>
                            <i className="border-2 rounded-full p-1 mx-1 fa-brands fa-twitter"></i>
                            <i className="border-2 rounded-full p-1 mx-1 fa-brands fa-linkedin"></i>
                            <i className="border-2 rounded-full p-1 mx-1 fa-solid fa-globe"></i>
                        </div>
                    </div>
                    <div className="text-white my-4 md:my-2 flex flex-col justify-center items-center w-90% md:w-[30%]">
                        <h1 className="uppercase font-bold">about freelancer</h1>
                        <p className="text-center text-[0.75em]">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center bg-gray-800 text-white py-5">
            <p>Copyright &copy; Your website 2021</p>
        </div>
    </footer>
)
}
