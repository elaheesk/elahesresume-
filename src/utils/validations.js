export const validations = {
    name: (value) => ({
        isValid: /^[0-9A-Za-z\s]{3,16}$/.test(value),
        error: "Enter a valid username",
    }),
    email: (value) => ({
        isValid: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value),
        error: "Please enter a valid email",
    }),
    message: (value) => ({
        isValid: value.trim() !== "",
        error: "Please fill in the empty field",
    }),
};