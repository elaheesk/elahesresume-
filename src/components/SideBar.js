﻿import Languages from "./Languages";
import { useNavigate } from "react-router-dom";
import { languages, personalDetails, certifications } from "../data";
import { fixSwedishCharacters } from "../ValidationFunctions";
import Form from "../components/Form";

const SideBar = ({ tooltipContent, setTooltipContent }) => {
    const navigate = useNavigate();

    return(
        <div className="personal-container px-4">
            <button className="text-md text-[#505476]
                    font-semibold 
                    rounded-lg
                    hover:underline
                    hover:text-[#505476]"
                onClick={() => navigate("/details")}>Personal</button>
            {personalDetails.map((item, index) => (
                <div key={index} className="mt-4 flex justify-start">
                    {item.icon}
                    <div className="pl-2 mb-2 leading-[0.825rem]">
                        {item.label === 'Address' ? (
                            <div className="flex flex-justify-between">
                                <div
                                    onMouseLeave={() => setTooltipContent(false)}
                                    onMouseOver={() => setTooltipContent(true)}
                                    className="font-semibold text-xs">{item.label}
                                </div>
                                <p style={{ backgroundColor: tooltipContent ? "#cbccd6" : "transparent" }}
                                    className="rounded-lg ml-1 px-2 bg-[#505476] text-xs">
                                    {tooltipContent ? fixSwedishCharacters("Rödabergsgatan 9") : ''}
                                </p>
                            </div>
                        ) : <div className="font-semibold text-xs">{item.label}</div>
                        }
                        {item.isLink ? (
                            <a className="underline underline-offset-2  text-xs hover:no-underline text-blue-600" href={item.link} target="_blank" rel="noreferrer" >{item.value}vad är detta</a>
                        ) : (
                            <p className="text-xs">{item.value}</p>
                        )}
                    </div>
                </div>
            ))}
            <div className="mt-8">
                <h2 className="text-sm text-[#505476] font-semibold mb-1">Languages</h2>
                {languages.map((language, index) =>
                    <Languages key={index} language={language} />
                )}
            </div>
            <div className="mt-8">
                <h2 className="text-sm text-[#505476] font-semibold mb-1">Licenses & certifications</h2>
                <div className="p-0 text-xs">
                    {certifications.map((cerificate, idx) =>
                        <div key={idx}>
                            <a
                                href={cerificate.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:no-underline">
                                {cerificate.title}
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-8">
                <Form />
            </div>
        </div>
    )
}
export default SideBar;