export const emptyFormData = {
    name: { value: "", hasError: false, touched: false },
    email: { value: "", hasError: false, touched: false },
    message: { value: "", hasError: false, touched: false },
}

export const formFields = [
    { id: "name", name: "name", placeholder: "Enter your name", type: "text" },
    { id: "email", name: "email", placeholder: "Enter your email", type: "email" },
    { id: "message", name: "message", placeholder: "Enter your message", isTextarea: true },
];