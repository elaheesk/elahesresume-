import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { questions } from "../data"
const Accordion = () => {
    const [accordionContent, setAccordionContent] = useState([])

    const toggleAccordion = (idx) => {
        const updatedAccordion = accordionContent.map((accordion, index) => {
            if (index === idx) {
                return {
                    ...accordion,
                    isOpen: !accordion.isOpen,
                };

            } else {
                return accordion;
            }
        });
        setAccordionContent(updatedAccordion);
    }
    useEffect(() => {
        setAccordionContent(questions);
    }, [])
    return (
        <div className="accordion mt-6 mb-8">
            {accordionContent.map((accordion, index) => (
                <div
                    onClick={() => toggleAccordion(index)}
                    className="border-solid border-2 rounded-lg bg-[#505476] text-white p-6 mt-1 hover:bg-[#20233e]"
                    key={index}>
                    <div className="flex justify-between text-2xl font-semibold">
                        {accordion.question}
                     {accordion.isOpen ? <IoCloseSharp /> : <FaPlus />}
                    </div>
                    <div className="accordion-answers whitespace-pre-line p-2">{accordion.isOpen ? <div
                        dangerouslySetInnerHTML={{ __html: accordion.answer }}
                    /> : ""} </div>
                    
                </div>
            ))}
        </div>
    )

}
export default Accordion;