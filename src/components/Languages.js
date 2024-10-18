import { FaCircle } from "react-icons/fa";
const Languages = ({ language }) => {
    return (
        <div className="flex justify-between">
            <div className="tooltip relative pl-0 block bg-gradient-to-l from-rgba(2,2,2,0.04) white
                  mb-1 p-1 rounded-lg text-xs">
                {language}
                <div className="tooltiptext absolute invisible
                     bg-gradient-to-r from-[#e9e9e9] to-[#e9e9e9] 
                     text-xs
                     left-full w-[3rem]">
                    {language === "Persian" ?
                        "Mother tounge" : "Fluent"}
                </div>
            </div>
            <div className="flex justify-around items-center">
                <FaCircle className="faCircle size-3" />
                <FaCircle className="faCircle size-3 ml-1" />
                <FaCircle className="faCircle size-3 ml-1" />
                <FaCircle className="faCircle size-3 ml-1" />
                {language === "Swedish" || language === "Persian" ?
                    <FaCircle className="faCircle size-3 ml-1" /> :
                    <FaCircle className="faCircleEmpty size-3 ml-1 bg-gradient-to-l hover:bg-gradient-to-r" />}
            </div>
        </div>
    )
}
export default Languages;