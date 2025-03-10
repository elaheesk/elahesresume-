﻿import Languages from "./Languages";
import { useNavigate } from "react-router-dom";
import { certifications } from "../data/educationsData";
import { personalDetails, languages } from "../data/personalData";
import { fixSwedishCharacters } from "../utils/formatters";
import Form from "../components/Form";

const SideBar = ({ tooltipContent, setTooltipContent }) => {
    const navigate = useNavigate();

    return(
        <aside className="personal-container px-4 mt-6">
            <button className=" text-[#505476]
                    font-bold 
                    rounded-lg
                    hover:underline
                    hover:text-[#505476]"
                onClick={() => navigate("/details")}>Personal</button>
            {personalDetails.map((item, index) => (
                <section key={index} className="mt-4 flex justify-start">
                    <div className=" mb-2 leading-[0.825rem]">
                        {item.label === 'Address' ? (
                            <div className="flex flex-justify-between">
                                <div
                                    onMouseLeave={() => setTooltipContent(false)}
                                    onMouseOver={() => setTooltipContent(true)}
                                    className="text-sm">{item.label}
                                </div>
                                <p style={{ backgroundColor: tooltipContent ? "#cbccd6" : "transparent" }}
                                    className="rounded-lg ml-1 px-2 bg-[#505476] text-xs">
                                    {tooltipContent ? fixSwedishCharacters("Rödabergsgatan 9") : ''}
                                </p>
                            </div>
                        ) : <div className="text-sm">{item.label}</div>
                        }
                        {item.isLink ? (
                            <a className="underline underline-offset-2  text-xs hover:no-underline text-blue-600" href={item.link} target="_blank" rel="noreferrer" >{item.value}</a>
                        ) : (
                            <p className="text-xs mt-1">{item.value}</p>
                        )}
                    </div>
                </section>
            ))}
            <section className="mt-8">
                <h2 className="text-sm text-[#505476] font-semibold mb-1">Languages</h2>
                {languages.map((language, index) =>
                    <Languages key={index} language={language} />
                )}
            </section>
            <section className="mt-8">
                <h2 className="text-sm text-[#505476] font-semibold mb-1">Licenses & certifications</h2>
                <div className="p-0 text-xs">
                    {certifications.map((cerificate) =>
                        <div key={cerificate.id}>
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
            </section>
            <div className="mt-8">
                <Form />
            </div>
        </aside>
    )
}
export default SideBar;