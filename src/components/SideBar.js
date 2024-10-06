import Languages from "./Languages";
import { Link, useNavigate } from "react-router-dom";
import { languages, personalDetails, technicalProjects, technicalProjectPharmacist, certifications } from "../data";

const SideBar = ({ tooltipContent, setTooltipContent }) => {
    const navigate = useNavigate();
    const fixSwedishCharacters = (text) => {
        return text.replace(/ö/g, 'ö').replace(/ä/g, 'ä').replace(/å/g, 'å');
    };
    return (
        <div className="personal-container px-4">
            <button className="text-2xl text-[#505476] 
                    font-semibold 
                    rounded-lg
                    hover:px-2
                    hover:bg-violet-300
                    hover:shadow-inner
                    hover:shadow-violet-300
                    hover:shadow-lg shadow-violet-100
                    hover:text-[#505476]"
                onClick={() => navigate("/details")}>Personal</button>
            {personalDetails.map((item, index) => (
                <div key={index} className="mt-4 flex justify-start">
                    {item.icon}
                    <div className="pl-3">
                        {item.label === 'Address' ? (
                            <div className="flex flex-justify-between">
                                <div
                                    onMouseLeave={() => setTooltipContent(false)}
                                    onMouseOver={() => setTooltipContent(true)}
                                    className="font-semibold text-md">{item.label}
                                </div>
                                <p style={{ backgroundColor: tooltipContent ? "#cbccd6" : "transparent" }}
                                    className="rounded-lg ml-1 px-2 bg-[#505476]">
                                    {tooltipContent ? fixSwedishCharacters("Rödabergsgatan 9") : ''}
                                </p>
                            </div>
                        ) : <div className="font-semibold text-md">{item.label}</div>
                        }
                        {item.isLink ? (
                            <Link className="underline underline-offset-2 text-md hover:no-underline text-blue-600" to={item.link}>{item.value}</Link>
                        ) : (
                            <p>{item.value}</p>
                        )}
                    </div>
                </div>
            ))}
            <div className="mt-8">
                <h2 className="text-xl text-[#505476] font-semibold mb-1">Languages</h2>
                {languages.map((language, index) =>
                    <Languages key={index} language={language} />
                )}
            </div>
            <div className="mt-8">
                <h2 className="text-xl text-[#505476] font-semibold mb-1">Technical Projects</h2>
                <div className="whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: technicalProjects }}
                />   <div className="whitespace-pre-line mt-4"
                    dangerouslySetInnerHTML={{ __html: technicalProjectPharmacist }}
                />
                <p className="text-[14px] mt-2">If you would like to see more of my projects, feel free to visit my {""}
                    <a className="text-blue-600" href="https://github.com/elaheesk?tab=repositories">GitHub.</a>
                </p>
            </div>
            <div className="mt-8">
                <h2 className="text-xl text-[#505476] font-semibold mb-1">Licenses & certifications</h2>
                <div className="list-none p-0 text-md">
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
        </div>
    )
}
export default SideBar;