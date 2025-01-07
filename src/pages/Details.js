import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";
import img0046 from '../IMG_0046.JPG';
import img0051 from '../IMG_0051.jpg';
import img7398 from '../IMG_7398.jpg';
import codeImg from '../codeImg.jpg';
const Details = () => {
    const images = [img0046, img0051, img7398, codeImg];
    return (
        <div className="lg:w-[793px]  lg:justify-self-center flex flex-col">
            <div className="px-2 lg:justify-self-center">
                <div className="flex justify-start mb-3">
                    <Link to="/" className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                        </svg>
                        Back
                    </Link>
                </div>
                <ul className="imgOfMe">
                    {images.map((src, index) => (
                        <li
                            key={index}
                            style={{ backgroundImage: `url(${src})` }}
                        ></li>
                    ))}
                </ul>
            </div>
            <Accordion />
        </div>
    )
}
export default Details;