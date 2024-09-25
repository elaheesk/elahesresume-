const JobEducationDetails = ({ date, title, companyOrSchool, companyLink, description }) => {
    return (<li className="mt-2">
        <div className="flex justify-between">
            <h3 className="text-sm font-semibold">{title}</h3>
            <div>{date}</div>
        </div>
        {companyLink !== "" ? <a className="text-[#505476] hover:underline" href={companyOrSchool}>{companyOrSchool}</a>
            : <div className="text-[#505476]">{companyOrSchool}</div>
        }
        <div 
            dangerouslySetInnerHTML={{ __html: description }}
        />
    </li>)
}
export default JobEducationDetails;