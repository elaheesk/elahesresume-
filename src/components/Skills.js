const Skills = ({ skill, }) => {
    return (
        <div className="tooltip relative block bg-gradient-to-l from-[rgba(2,2,2,0.04)] to-white mb-1 p-1 rounded-lg text-sm">
            {skill.name}
            <li className="tooltiptext absolute invisible left-2/4 w-[140px]
                bg-gradient-to-r from-[rgba(2,2,2,0)] to-[#e9e9e9] 
                z-0 
                hover:visible
                hover:z-10">
                {skill.knowledgeLevel}
            </li>
        </div>
    )
}
export default Skills;