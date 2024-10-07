const JobEducationDetails = ({ date, title, companyOrSchool, companyLink, description }) => {
    return (
        <li className="mb-3 md:pl-4">
        <div className="flex justify-between">
                <h3 className="text-sm font-semibold">{title}</h3>
                <div className="text-sm">{date}</div>
        </div>
        {companyLink !== "" ? <a className="text-[#505476] text-sm hover:underline" href={companyOrSchool}>{companyOrSchool}</a>
            : <div className="text-[#505476] text-sm">{companyOrSchool}</div>
            }
            <div className="text-xs"
            dangerouslySetInnerHTML={{ __html: description }}
        />
        </li>
    )
}
export default JobEducationDetails;