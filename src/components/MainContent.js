import React, { useState } from "react";
import Skills from "./Skills";
import { Link } from "react-router-dom";
import { MdWorkHistory } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import JobEducationDetails from "../components/JobEducationDetails";
import { intoduction, workexperiences, educationList, frontendSkills, backendSkills, toolsSkills, previousWorkexperiences, resumeDescription } from "../data";

const MainContent = () => {
    const [toggleAccordion, setToggleAccordion] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded((prev) => !prev);
    };

    const containerClass = isExpanded ? 'text-container expanded' : 'text-container';
    return (
        <div className="md:basis-3/4 px-4 sm:w-full"
            onMouseOver={() => setToggleAccordion(!toggleAccordion)}>
            <div id="resume-description" className="rounded-lg">{resumeDescription}</div>
            <p className="introduction-text text-xs md:p-2">{intoduction}</p>
            <Link className="underline text-xs text-blue-600 md:px-2 pb-1
                    hover:rounded-lg
                    hover:bg-violet-200
                    hover:shadow-inner
                    hover:shadow-violet-300
                    hover:shadow-lg shadow-violet-100
                    hover:text-[#505476]"
                to="/details">Read more</Link>
            <hr className="mt-2"></hr>
            <div className="flex justify-start mt-2">
                <GiSkills className="giSkills mt-1" />
                <h2 className="text-md font-bold text-[#505476] pl-1">Skills</h2>
            </div>
            <div className="flex justify-between mb-2  mr-4">
                <div className="md:pl-4">
                    <h3 className="text-sm font-semibold mb-2">Frontend</h3>
                    {frontendSkills.map((skill, index) => (
                        <Skills key={index} skill={skill} />
                    ))}
                </div>
                <div>
                    <h3 className="text-sm font-semibold mb-2">Backend</h3>
                    {backendSkills.map((skill, index) => (
                        <Skills key={index} skill={skill} />
                    ))}
                </div>
                <div>
                    <h3 className="text-sm font-semibold mb-2">Tools</h3>
                    {toolsSkills.map((skill, index) => (
                        <Skills key={index} skill={skill} />
                    ))}
                </div>
            </div>
            <hr className="mt-3"></hr>
            <div className="mt-4">
                <div className="flex justify-start">
                    <MdWorkHistory className="mdWorkHistory mt-1" />
                    <h2 className="text-md font-bold text-[#505476] pl-1">Work experience</h2>
                </div>
                {workexperiences.map((experience, index) =>
                    <JobEducationDetails key={index} title={experience.jobTitle} date={experience.date} companyOrSchool={experience?.company} companyLink={experience.companyLink} description={experience.jobDescription} />
                )}
                <div className={containerClass}>
                    <div className="text-content">
                        {previousWorkexperiences.map((experience, index) =>
                            <JobEducationDetails key={index} title={experience.jobTitle} date={experience.date} companyOrSchool={experience?.company} companyLink={experience.companyLink} description={experience.jobDescription} />
                        )}
                    </div>
                </div>
                <button className="text-blue-600 text-sm underline md:ml-4 mt-0" onClick={toggleText}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            </div>
            <hr className="mt-2"></hr>
            <div className="mt-4">
                <div className="flex justify-start">
                    <RiGraduationCapFill className="riGraduationCapFill pl-0 mt-1" />
                    <h2 className="text-md font-bold text-[#505476] pl-1">Education and Qualifications</h2>
                </div>
                {educationList.map((education, index) =>
                    <JobEducationDetails key={index} title={education.title} date={education.date} companyOrSchool="" companyLink={education.school} description={education.credits} />
                )}
            </div>
            <h2 className="text-md font-bold text-[#505476] pl-4">References</h2>
            <li className="pl-4 text-xs" >References available on request.</li>
        </div>
    )
}
export default MainContent;