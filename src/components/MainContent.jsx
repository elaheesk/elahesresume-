import React, { useState } from "react";
import { Link } from "react-router-dom";
import JobEducationDetails from "../components/JobEducationDetails";
import SkillsSection from "../components/SkillsSection";
import JobEducationDetailsSection from "../components/JobEducationDetailsSection"
import { intoduction} from "../data/personalData";
import { workexperiences, previousWorkexperiences } from "../data/workExperienceData";
import {educationList } from "../data/educationsData";

const MainContent = () => {
    const [toggleAccordion, setToggleAccordion] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded((prev) => !prev);
    };

    const containerClass = isExpanded ? 'text-container expanded' : 'text-container';

    return (
        <main className="md:basis-3/4 px-3 sm:w-full"
            onMouseOver={() => setToggleAccordion(!toggleAccordion)}>
            <header className="text-xs md:pl-1 p-2 pb-0">
                {intoduction}
                <Link className="text-blue-500  hover:underline"
                to="/details">Read more</Link>
            </header>
            <hr className="mt-2"></hr>
                <h2 className="mt-2 font-bold text-[#505476] pl-1">Skills</h2>
            <SkillsSection />
            <hr className="mt-3"></hr>
            <div className="mt-4">
                <div className="flex justify-start">
                    <h2 className="text-md font-bold text-[#505476]">Work experience</h2>
                </div>
                {workexperiences.map((experience, index) =>
                    <JobEducationDetails key={index} title={experience.jobTitle} date={experience.date} companyOrSchool={experience?.company} companyLink={experience.companyLink} description={experience.jobDescription || null} jobDescriptionBulletPoint={experience.jobDescriptionBulletPoint || [""]} />
                )}
                <div className={containerClass}>
                    <div className="text-content">
                        {previousWorkexperiences.map((experience, index) =>
                            <JobEducationDetails key={index} title={experience.jobTitle} date={experience.date} companyOrSchool={experience?.company} companyLink={experience.companyLink} description={experience.jobDescription} />
                        )}
                    </div>
                </div>
                <button className="text-blue-600 text-sm underline md:ml-1 mt-0" onClick={toggleText}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            </div>
            <hr className="mt-2"></hr>
            <JobEducationDetailsSection title="Education and Qualifications" data={educationList} />
            <h2 className="text-md font-bold text-[#505476] pl-1">References</h2>
            <p className="pl-1 text-xs" >References available on request.</p>
        </main>
    )
}
export default MainContent;