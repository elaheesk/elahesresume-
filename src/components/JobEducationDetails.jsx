const JobEducationDetails = ({ date, title, companyOrSchool, companyLink, description, jobDescriptionBulletPoint = [] }) => {
    const filteredBulletPoints = jobDescriptionBulletPoint.filter((point) => point.trim() !== "");
    return (
        <div className="mb-3 md:pl-1">
            <div className="flex justify-between">
                <h3 className="text-sm font-semibold mt-2">{title}</h3>
                <div className="text-sm mt-2">{date}</div>
            </div>
            {companyOrSchool !== "" &&
                <div className="text-[#505476] text-sm"
                    onClick={
                        companyLink
                            ? () => window.open(companyLink, "_blank")
                            : undefined
                    }
                    style={{ cursor: companyLink ? "pointer" : "default" }}
                >
                    {companyOrSchool}
                </div>}
            {description && (
                <div className="text-xs leading-normal mt-2" dangerouslySetInnerHTML={{ __html: description }} />
            )}
            {filteredBulletPoints.length > 0 && (
                <ul className="list-disc ml-3 mt-2">
                    {filteredBulletPoints.map((eachTask, index) => (
                        <li key={index} className="text-xs" dangerouslySetInnerHTML={{ __html: eachTask }} />
                    ))}
                </ul>
            )}
        </div>
    )
}
export default JobEducationDetails;