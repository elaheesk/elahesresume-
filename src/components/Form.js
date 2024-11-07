import React, { useState } from "react";
import { validations } from "../ValidationFunctions";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";


const Form = () => {
    const [formData, setFormData] = useState({
        name: { value: "", hasError: false, touched: false },
        email: { value: "", hasError: false, touched: false },
        message: { value: "", hasError: false, touched: false },
    });
    const [status, setStatus] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);
    const handleExpandForm = () => setIsExpanded(true);
    const handleCloseForm = () => {
        const isFormValid = Object.values(formData).every(
            (input) => !input.hasError && input.touched
        );

        if (!isFormValid) {
            setFormData({
                name: { value: "", hasError: false, touched: false },
                email: { value: "", hasError: false, touched: false },
                message: { value: "", hasError: false, touched: false },
            });
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
                setFormData({
                    name: { value: "", hasError: false, touched: false },
                    email: { value: "", hasError: false, touched: false },
                    message: { value: "", hasError: false, touched: false },
                });
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
                    <div className="overlay" onClick={handleCloseForm}></div>
                )}
                <div className="form-content" onClick={handleExpandForm}>
                    {isExpanded && (
                        <button className="close-button" onClick={(e) => {
                            handleCloseForm();
                        }}>
                            &times;
                        </button>
                    )}
                    <div className="w-full max-w pt-2">
                        <form className="shadow-2xl rounded px-4 pt-4 pb-6 mb-4" onSubmit={handleSubmit} noValidate>
                            <div className="mb-4">
                                <label className="block text-[#505476] text-sm font-bold mb-1">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name.value}
                                    onChange={handleChange}
                                    onBlur={blurHandler}
                                />
                                {formData.name.touched && formData.name.hasError && (
                                    <div style={{ color: "red" }}>{formData.name.errorMessage}</div>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#505476] text-sm font-bold mb-1">
                                    Your email
                                </label>
                                <input
                                    required
                                    className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email.value}
                                    onChange={handleChange}
                                    onBlur={blurHandler}
                                />
                                {formData.email.touched && formData.email.hasError && (
                                    <div style={{ color: "red" }}>{formData.email.errorMessage}</div>
                                )}
                            </div>
                            <div className="mb-2">
                                <label className="block text-[#505476] text-sm font-bold mb-1">
                                    Messege
                                </label>
                                <textarea
                                    required
                                    className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    name="message"
                                    placeholder="Enter your message"
                                    value={formData.message.value}
                                    onChange={handleChange}
                                    onBlur={blurHandler}
                                />
                                {formData.message.touched && formData.message.hasError && (
                                    <div style={{ color: "red" }}>{formData.message.errorMessage}</div>
                                )}
                            </div>
                            <div className="flex items-center justify-end">
                                <button className="bg-[#505476] hover:bg-blue-700 text-white font-bold py-1 px-4 text-xs rounded focus:outline-none focus:shadow-outline" type="submit">
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