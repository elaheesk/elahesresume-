import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
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
                    className="border-solid border-2 rounded-lg bg-[#505476] text-white p-4 mt-1 hover:bg-[#20233e] cursor-pointer"
                    key={index}
                >
                    <div className="flex justify-between text-sm font-semibold">
                        {accordion.question}
                        {accordion.isOpen ? <IoCloseSharp /> : <FaPlus />}
                    </div>
                    <div
                        className="overflow-hidden"
                        style={{
                            maxHeight: accordion.isOpen ? "500px" : "0px",
                            transition: accordion.isOpen
                                ? "max-height 1.5s ease-in-out" 
                                : "max-height 0.5s ease-in-out", 
                        }}
                    >
                        <div
                            className="whitespace-pre-line p-2 text-sm"
                            dangerouslySetInnerHTML={{ __html: accordion.answer }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Accordion;