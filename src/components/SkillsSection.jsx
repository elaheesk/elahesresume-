import Skills from "./Skills"
import { skillCategories } from "../data/skillsData"

const SkillsSection = () => (
    <section className="flex justify-between mb-2 mr-4 mt-1">
        {skillCategories.map(({ title, skills }) => (
            skills.length > 0 && ( 
                <div key={title}>
                    <h3 className="text-sm font-semibold">{title}</h3>
                    {skills.map((skill) => (
                        <Skills key={skill.id} skill={skill} />
                    ))}
                </div>
            )
        ))}
    </section>
);
export default SkillsSection