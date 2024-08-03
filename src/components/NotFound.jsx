import notFoundImage from "../assets/1706066503702.png"

export default function NotFound() {
return (
    <div className="w-full h-full min-h-[80vh] flex justify-center items-center">
        <img src={notFoundImage} className="w-full max-h-[80%] max-w-[80%] h-full p-14" alt="" />
    </div>
)
}
