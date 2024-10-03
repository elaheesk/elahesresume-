import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Accordion from "../components/Accordion";
import IMG_0046 from "../IMG_0046.JPG";
export const test = IMG_0046;
const Details = () => {
    return (
        <div className="lg:w-[1000px]  lg:justify-self-center flex flex-col">
            <div className="px-2 lg:justify-self-center">
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
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <Accordion />
        </div>

    )
}
export default Details;