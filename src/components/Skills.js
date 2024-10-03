const Skills = ({ skill, }) => {
    return (
        <div className="tooltip mb-1 p-1 rounded-lg">
            {skill.name}
            <li className="tooltiptext">{skill.knowledgeLevel}</li>
        </div>
    )
}
export default Skills;