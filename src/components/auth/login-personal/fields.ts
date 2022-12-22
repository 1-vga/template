import { StateField, MappedField, Validator } from "./types";
import { loginPersonalValidation } from '../../../validation/validations';

export const phone_or_email: StateField = {
    name: "phone_or_email",
    value: "",
    isValid: true,
    touched: false,
};

export const password: StateField = {
    name: "password",
    value: "",
    isValid: true,
    touched: false,
};

export const loginPersonalFields: MappedField[] = [
    { type: "input", name: "phone_or_email", title: "E-mail or phone number", placeholder: "Type your e-mail or phone number" },
    { type: "input", name: "password", title: "Password", placeholder: "Type your password" },
];

export const fieldsValidation: Validator = {
    phone_or_email: loginPersonalValidation.phone_or_email,
    password: loginPersonalValidation.password,
};
