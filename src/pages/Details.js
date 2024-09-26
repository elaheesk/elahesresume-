import { Link } from "react-router-dom";
import { backgroundImgSrc } from "../data"
import { IoIosArrowBack } from "react-icons/io";
import Accordion from "../components/Accordion";

const Details = () => {
    return (
        <div className="px-2 lg:w-[1000px]  lg:justify-self-center">
            <div className="flex justify-start mb-4">
                <Link to="/"
                    className="text-xl 
                        font-bold
                        rounded-lg 
                        px-6 py-2 
                        border 
                        bg-[#505476] 
                        text-white 
                        hover:bg-violet-300
                        hover:shadow-inner
                        hover:shadow-violet-300
                        hover:shadow-lg shadow-violet-100
                        hover:text-[#505476]" >
                    <IoIosArrowBack className="size-5 inline" />
                    Back
                </Link>
            </div>
            <div className="details-container">
                <img className="w-full rounded-lg" src={backgroundImgSrc} alt="backgroundpicture" />
                <div className="details-content">
                    <h1 className="md:text-3xl font-bold text-white">Get to Know Me</h1>
                    <ul>
                        <li className="text-md md:text-xl">My Journey and Strengths</li>
                        <li className="text-md md:text-xl">What I Bring to the Team</li>
                    </ul>
                </div>
            </div>
            <Accordion />
        </div>
    )
}
export default Details;