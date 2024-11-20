import React, { useState } from "react";
import { validations } from "../ValidationFunctions";
import { emptyFormData } from "../data";
import { collection, addDoc } from "firebase/firestore";
import FormField from "./FormField";
import { db } from "../firebase";


const Form = () => {
    const [formData, setFormData] = useState(emptyFormData);
    const [status, setStatus] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandForm = () => {
        setIsExpanded(true)
    };
    const handleCloseForm = () => {
        const isFormValid = Object.values(formData).every(
            (input) => !input.hasError && input.touched
        );

        if (!isFormValid) {
            setFormData(emptyFormData);
        }
        setIsExpanded(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevForm) => ({
            ...prevForm,
            [name]: {
                ...prevForm[name],
                value: value,
                touched: true,
            },
        }));
    };

    const blurHandler = (e) => {
        const { name, value } = e.target;
        const { isValid, error } = validations[name](value);

        setFormData((prevForm) => ({
            ...prevForm,
            [name]: {
                ...prevForm[name],
                hasError: !isValid,
                errorMessage: isValid ? "" : error,
                touched: true,
            },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = Object.values(formData).every(
            (input) => !input.hasError && input.touched
        );

        if (isFormValid) {
            try {
                const formValues = {
                    name: formData.name.value,
                    email: formData.email.value,
                    message: formData.message.value,
                };

                await addDoc(collection(db, "contactRequests"), formValues);
                setStatus("Message sent successfully!");
                setFormData(emptyFormData);
            } catch (error) {
                setStatus("Failed to send message.");
            }
        } else {
            setStatus("Please fill in all required fields correctly.");
        }
    };

    return (
        <>
            <h2 className="text-sm text-[#505476] font-bold mb-1">Contact me</h2>
            {formData.name.value}
            <div className={`form-container ${isExpanded ? "expanded" : ""}`}>
                {isExpanded && (
                    <div className="overlay"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCloseForm();
                        }}
                    ></div>
                )}
                <div className="form-content" onClick={handleExpandForm}>
                    {isExpanded && (
                        <button className="close-button"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCloseForm();
                            }}>
                            &times;
                        </button>
                    )}
                    <div className="w-full max-w pt-2">
                        <form className="shadow-2xl rounded px-4 pt-4 pb-6 mb-4" onSubmit={handleSubmit} noValidate>
                            <FormField
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name.value}
                                onChange={handleChange}
                                onBlur={blurHandler}
                                errorMessage={formData.name.errorMessage}
                                hasError={formData.name.hasError}
                                touched={formData.name.touched}
                            />
                            <FormField
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email.value}
                                onChange={handleChange}
                                onBlur={blurHandler}
                                errorMessage={formData.email.errorMessage}
                                hasError={formData.email.hasError}
                                touched={formData.email.touched}
                            />
                            <FormField
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                                value={formData.message.value}
                                onChange={handleChange}
                                onBlur={blurHandler}
                                errorMessage={formData.message.errorMessage}
                                hasError={formData.message.hasError}
                                touched={formData.message.touched}
                                isTextarea={true}
                            />
                            <div className="flex items-center justify-end">
                                <button
                                    className="bg-[#505476] hover:bg-blue-700 text-white font-bold py-1 px-4 text-xs rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                        {isExpanded && status && <p className="text-[#505476]">{status}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Form;