const Skills = ({ skill, }) => {
    return (
        <div className="
            text-xl py-1 rounded-lg relative
            hover:px-2
            hover:py-2
            hover:text-md
            hover:bg-violet-100
            hover:shadow-inner
            hover:shadow-violet-500
            hover:shadow-lg shadow-violet-100">
            {skill}
        </div>
    )
}
export default Skills;