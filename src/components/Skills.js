const Skills = ({ skill, }) => {
    return (
        <div className="break-words text-md bg-violet-100 mb-2 px-4
            md:text-xl py-1 rounded-lg 
            hover:text-md
            hover:bg-violet-100
            hover:shadow-inner
            hover:shadow-violet-500
            hover:shadow-md shadow-violet-100">
            {skill}
        </div>
    )
}
export default Skills;