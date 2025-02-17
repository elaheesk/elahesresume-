import React, { useState } from "react";
import { validations } from "../utils/validations";
import { emptyFormData, formFields } from "../data/formData";
import { collection, addDoc } from "firebase/firestore";
import FormField from "./FormField";
import { db } from "../firebase";


const Form = () => {
    const [formData, setFormData] = useState(emptyFormData);
    const [status, setStatus] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);

    const isFormValid = Object.values(formData).every(
        (input) => !input.hasError && input.touched
    );

    const handleExpandForm = () => {
        setIsExpanded(true)
    };

    const handleCloseForm = () => {
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

    const validateField = (name, value) => {
        const { isValid, error } = validations[name](value);
        return { hasError: !isValid, errorMessage: isValid ? "" : error };
    };

    const blurHandler = (e) => {
        const { name, value } = e.target;
        const validationResult = validateField(name, value);

        setFormData((prevForm) => ({
            ...prevForm,
            [name]: {
                ...prevForm[name],
                ...validationResult,
                touched: true,
            },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
        <React.Fragment>
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
                            {formFields.map(({ id, name, placeholder, type, isTextarea }) => (
                                <FormField
                                    key={id}
                                    id={id}
                                    name={name}
                                    type={type || "text"}
                                    placeholder={placeholder}
                                    value={formData[name].value}
                                    onChange={handleChange}
                                    onBlur={blurHandler}
                                    errorMessage={formData[name].errorMessage}
                                    hasError={formData[name].hasError}
                                    touched={formData[name].touched}
                                    isTextarea={isTextarea}
                                />
                            ))}
                            <div className="flex items-center justify-end">
                                <button
                                    className={`bg-[#505476] hover:bg-blue-700 text-white font-bold py-1 px-4 text-xs rounded focus:outline-none focus:shadow-outline ${status === "Submitting..." ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                    type="submit"
                                    disabled={status === "Submitting..."}
                                >
                                    {status === "Submitting..." ? "Sending..." : "Send"}
                                </button>
                            </div>
                        </form>
                        {isExpanded && status && <p className="text-[#505476]">{status}</p>}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Form;