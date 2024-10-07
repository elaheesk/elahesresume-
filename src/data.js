import { FaPhoneAlt, FaLinkedin, FaGithub, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export const intoduction = "Software developer with over 3 years of hands-on experience building interactive applications in React and a strong command of backend technologies such as .NET and C#. I thrive on dissecting complex problems and transforming ideas into efficient, scalable solutions. With a focus on delivering user-centric experiences, I balance a meticulous attention to detail with strategic thinking, ensuring that every line of code aligns with business goals. I’m driven by curiosity and a relentless desire to refine both my craft and the products I develop, turning customer needs into seamless digital solutions that drive real impact. "
export const questions = [{
    isOpen: false,
    question: "What makes me the right candidate?",
    answer: `I bring a unique combination of technical expertise, problem-solving skills, and a passion for creating seamless user experiences. With over three years of hands-on experience in frontend development, primarily working with React and TypeScript, I have a proven track record of delivering dynamic, high-quality applications that meet both user needs and business objectives. 

Beyond coding, I am a strong collaborator who thrives in agile environments, working closely with UX designers and backend teams to ensure a cohesive, efficient development process.My proactive approach to solving problems and my attention to detail ensure that I deliver solutions that are both functional and aligned with accessibility and usability standards.

In every project, my focus is on contributing to the overall success of the team by ensuring that I not only meet technical requirements but also add value to the user experience and business outcomes.`,
},
{
    isOpen: false,
    question: "What qualities do I bring, both good and bad?",
    answer: `As a person, I am driven by curiosity and creativity,always eager to learn and find innovative solutions to problems. My strengths lie in my determination and ability to stay focused on both the big picture and the finer details, ensuring that projects are completed efficiently and to a high standard. I am also a strong team player who values collaboration and open communication.
 
    On the flip side, I can sometimes be a perfectionist, which means I may spend extra time refining details. However, I am aware of this and have learned to balance quality with deadlines to maintain productivity.`
},
{
    isOpen: false,
    question: "Why did I choose to become a frontend developer after working as a pharmacist?",
    answer: `After eight years as a pharmacist, I decided to pursue a career in software development because I have always been drawn to logical thinking and problem-solving. My twin sister, who made a similar career change before me, inspired me to explore coding, and once I began, I quickly discovered a passion for it.

I enjoy the rational and structured aspects of programming, as well as the continuous learning involved with new technologies and frameworks.There is a great sense of fulfillment in creating something that adds value, whether it’s solving a customer’s challenge or building a tool that improves processes.The ability to see the tangible impact of my work gives me a strong sense of accomplishment and drives my passion for frontend development.`
},
{
    isOpen: false,
    question: "How do I spend my freetime?",
    answer: "<div>In my free time, I enjoy watching documentaries and spending quality time with my family, friends, and my twin sister. I also love socializing over dinners with friends, and I have a strong passion for traveling and exploring new places. In addition, I occasionally work on personal coding projects, including the resume you are currently reading as well as <a class='underline underline-offset-2 text-blue-600'  href='https://you-phmacist.web.app/'>https://you-phmacist.web.app/</a></div> ",
}
];

export const languages = ["Swedish", "English", "Persian"];
export const technicalProjects = "<div class='text-xs'><span class='italic'>Interactive-Resume:</span> Developed a dynamic and responsive resume using React.js and deployed the project using Firebase. View source code on <a class='underline underline-offset-2 text-blue-600 hover:no-underline'  href='https://github.com/elaheesk/elahesresume-'>https://github.com/elaheesk/elahesresume-</a></div>"
export const technicalProjectPharmacist = "<div class='text-xs'><span class='italic'>Your-Phmacist Web Application:</span> Created a pharmacist-focused web application two years ago using modern web development technologies and deployed it via Firebase. This project reflects my background as a pharmacist and my passion for combining healthcare with technology. <a class='text-blue-600' href='https://elahe-your-pharmacist.web.app/' >View the live project here.</a></div>";
export const workexperiences = [
    {
        jobTitle: "Software developer",
        date: "Jan 2023 - Present",
        company: "Tietoevry Tech Services, Solna",
        companyLink: "https://www.tietoevry.com/",
        jobDescription: "<div>I have developed both external and internal e‑services for the City of Stockholm with varying levels of complexity. I have worked on existing services and been involved in building new ones, in total around 10 e-services which can be found at <a class='underline underline-offset-2 hover:no-underline text-blue-600' href='https://start.stockholm/e-tjanster/'>Start.Stockholm/e-tjanster</a>. Although I have more expertise in frontend than backend, I have also developed extensively in both backend and frontend and have been part of the process throughout the project's lifecycle, from the pre‑study phase, requirements management, and test case creation to development and maintenance. Based on UX design sketches, I have contributed to implementing the frontend, writing code, and continuously collaborating closely with UX to ensure accessibility from the sketch stage and to ensure alignment with the Web Manual, which contains the current guidelines for all of Stockholm's e‑services. My role has also included significant accessibility aspects, such as ongoing quality assurance and accessibility testing of individual components.</div>"

    },
    {
        jobTitle: "Frontend-developer",
        date: "Apr 2022 - Dec 2022",
        company: "Hopen, Stockholm",
        companyLink: "https://hopen.se/",
        jobDescription: "I have been building the Hopen platform from the start until we went live. The framework we used was React with typescript to build new features as well as maintaining and improving existing code bases. I have also written unit tests (using Jest) for our code. The whole frontend work was done by me and my collauge. We worked agile in two‑week sprints and used Jira as a tool to manage project. The platform is available at <a class='underline underline-offset-2 hover:no-underline text-blue-600' href='https://hopen.se/'>hopen.se</a></div>"
    },
    {
        jobTitle: "Full-stack developer intern",
        date: "Feb 2022 - Apr 2022",
        company: "Traders Alloy, Stockholm",
        companyLink: "",
        jobDescription: "Worked on developing the portfolio functionality and writing unit tests for it. Switching from backend and frontend using Vue.js, Node.js and PostgreSQL."
    },

];
export const previousWorkexperiences = [{
    jobTitle: "Pharmacist-seasonal",
    date: "Apr 2020 - Aug 2020",
    company: "ApoEx, Stockholm/Bromma",
    companyLink: "",
    jobDescription: "Within inpatient care. Product care, management of drug storehouses, work around clinical trials, manufacturing of cytostatics and sterile preparations in Cleanroom."
},
{
    jobTitle: "Ambulating pharmacist",
    date: "Jun 2014 - Aug 2020",
    company: "Lloyds (Doz), Sweden",
    companyLink: "",
    jobDescription: "Worked at different pharmacies around the country. The job demanded flexibility, problem solving mentality, genuine curiosity, commitment and an appreciation for diversity of different kind of colleagues and customers."
}]
export const educationList = [
    {
        title: "Ec Education Frontend developer",
        date: "Aug 2021 - Feb 2022",
        school: "Ec Education Helsingborg, Helsingborg",
        credits: "120 Credits"
    }, {
        title: "Course in Macroeconomics",
        date: "Sep 2016 - Dec 2016",
        school: "Lund University, Lund",
        credits: "30 Credits"
    }, {
        title: "Bachelor of Science in Pharmacy",
        date: "Aug 2011 - Jun 2014",
        school: "Uppsala University, Uppsala",
        credits: "180 Credits"
    }
]
export const personalDetails = [
    {
        label: 'Email',
        value: 'elahe199108@gmail.com',
        icon: <MdEmail className="text-[#505476] size-4" />,
        link: 'mailto:elahe199108@gmail.com',
        isLink: true,
    },
    {
        label: 'Phone',
        value: '+46 738923888',
        icon: <FaPhoneAlt className="text-[#505476] size-4 mt-1" />,
        isLink: false,
    },
    {
        label: 'Address',
        value: 'Stockholm',
        icon: <FaHome className="text-[#505476] size-4" />,
        isLink: false,
    },
    {
        label: 'LinkedIn',
        value: 'https://www.linkedin.com/in/elahe-eskandari/',
        icon: <FaLinkedin className="text-[#505476] size-4" />,
        link: 'https://www.linkedin.com/in/elahe-eskandari/',
        isLink: true,
    },
    {
        label: 'Github',
        value: 'https://github.com/elaheesk?tab=repositories',
        icon: <FaGithub className="text-[#505476]" />,
        link: 'https://github.com/elaheesk?tab=repositories',
        isLink: true,
    },
];

export const frontendSkills = [
    { name: "Javascript", knowledgeLevel: "Great knowledge" },
    { name: "Jquery", knowledgeLevel: "Great knowledge" },
    { name: "React (Redux/useContext)", knowledgeLevel: "Great knowledge" },
    { name: "React Native", knowledgeLevel: "Great knowledge" },
    { name: "TypeScript", knowledgeLevel: "Great knowledge" },
    { name: "Vue.js", knowledgeLevel: "Great knowledge" },
    { name: "HTML5/CSS3", knowledgeLevel: "Great knowledge" },
    { name: "Material UI/Vuetify", knowledgeLevel: "Great knowledge" },
    { name: "Tailwind CSS", knowledgeLevel: "Great knowledge" },
    { name: "Sass&Bootstrap", knowledgeLevel: "Great knowledge" },
    { name: "WCAG", knowledgeLevel: "Great knowledge" },

];
export const backendSkills = [
    { name: "C#", knowledgeLevel: "Good knowledge" },
    { name: "ASP.Net MVC", knowledgeLevel: "Good knowledge" },
    { name: "Entity Framework", knowledgeLevel: "Good knowledge" },
    { name: "REST API", knowledgeLevel: "Great knowledge" },
    { name: "Firebase", knowledgeLevel: "Basic knowledge" },
    { name: "SQL", knowledgeLevel: "Great knowledge" }

];
export const toolsSkills = [
    { name: "Git", knowledgeLevel: "Great knowledge" },
    { name: "GitHub", knowledgeLevel: "Great knowledge" },
    { name: "MySQL", knowledgeLevel: "Great knowledge" },
    { name: "Azure", knowledgeLevel: "Good knowledge" },
    { name: "Unit Testing", knowledgeLevel: "Great knowledge" },
    { name: "Figma/Balsamiq", knowledgeLevel: "Great knowledge" }
];
export const certifications = [
    {
        title: "AI-Basic Course",
        href: "/AI_basic_course.pdf",
    }, {
        title: "AI in your work",
        href: "/AI_in_your_work.pdf",
    }, {
        title: "IT-security for Employees",
        href: "/IT_security.pdf",
    }, {
        title: "SharePoint Online - M365",
        href: "/Sharepoint_Online_M365.pdf",
    }
]
export const resumeDescription = "This resume is custom-built by me using React, showcasing my ability to independently develop responsive and dynamic web applications."