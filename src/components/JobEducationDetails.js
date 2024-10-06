const JobEducationDetails = ({ date, title, companyOrSchool, companyLink, description }) => {
    return (
        <li className="mb-3 md:pl-4">
        <div className="flex justify-between">
                <h3 className="text-xl font-semibold">{title}</h3>
                <div className="text-md">{date}</div>
        </div>
        {companyLink !== "" ? <a className="text-[#505476] hover:underline" href={companyOrSchool}>{companyOrSchool}</a>
            : <div className="text-[#505476]">{companyOrSchool}</div>
            }
            <div className="text-md"
            dangerouslySetInnerHTML={{ __html: description }}
        />
        </li>
    )
}
export default JobEducationDetails;