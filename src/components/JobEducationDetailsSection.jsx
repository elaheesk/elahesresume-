import JobEducationDetails from "./JobEducationDetails"
const JobEducationDetailsSection = ({ title, data }) => (
    data.length > 0 && (
        <section className="mt-4">
            <div className="flex justify-start">
                <h2 className="text-md font-bold text-[#505476]">{title}</h2>
            </div>
            {data.map((item, index) => (
                <JobEducationDetails
                    key={index}
                    title={item.title || item.jobTitle}
                    date={item.date}
                    companyOrSchool={item.company || ""}
                    companyLink={item.companyLink}
                    description={item.jobDescription || item.credits || ""}
                    jobDescriptionBulletPoint={item.jobDescriptionBulletPoint || [""]}
                />
            ))}
        </section>
    )
);
export default JobEducationDetailsSection;