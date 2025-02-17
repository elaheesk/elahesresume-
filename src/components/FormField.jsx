const FormField = ({
    id,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    onBlur,
    errorMessage,
    hasError,
    touched,
    isTextarea = false,
}) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-[#505476] text-sm font-bold mb-1">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            {isTextarea ? (
                <textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                />
            ) : (
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                />
            )}
            {touched && hasError && <div style={{ color: "red" }}>{errorMessage}</div>}
        </div>
    )
}
export default FormField;