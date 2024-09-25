import { FaCircle } from "react-icons/fa";
const Languages = ({ language }) => {
    return (
        <div className="flex justify-between">
            {language}
            <div className="flex justify-around">
                <FaCircle className="faCircle size-4" />
                <FaCircle className="faCircle size-4 ml-1" />
                <FaCircle className="faCircle size-4 ml-1" />
                <FaCircle className="faCircle size-4 ml-1" />
                <FaCircle className="faCircleEmpty size-4 ml-1" />
            </div>
        </div>
    )
}
export default Languages;