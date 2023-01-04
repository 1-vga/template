import { StateField, MappedField, Validator } from "./types";
import { loginLabsValidation } from '../../../validation/validations';

export const name: StateField = { name: "name", value: "", isValid: true, touched: false };
export const city: StateField = { name: "city", value: "", isValid: true, touched: false, };
export const address: StateField = { name: "address", value: "", isValid: true, touched: false, };
export const working_days_and_hours: StateField = { name: "working_days_and_hours", value: "", isValid: true, touched: false, };
export const telephone_number: StateField = { name: "telephone_number", value: "", isValid: true, touched: false, };
export const website: StateField = { name: "website", value: "", isValid: true, touched: false, };
export const email: StateField = { name: "email", value: "", isValid: true, touched: false, };
export const password: StateField = { name: "password", value: "", isValid: true, touched: false, };

export const loginLabsFields: MappedField[] = [
    { type: "input", name: "name", title: "Name", placeholder: "Type your name", subtitle: '' },
    { type: "input", name: "city", title: "City", placeholder: "Please enter your country", subtitle: '' },
    { type: "input", name: "address", title: "Address", placeholder: "Please enter your address", subtitle: '' },
    { type: "input", name: "working_days_and_hours", title: "Working days and hours", placeholder: "Type your working days and hours", subtitle: '(ex. Mon-Sun 10:00-18:00)' },
    { type: "input", name: "telephone_number", title: "Telephone number", placeholder: "Type your telephone number", subtitle: '' },
    { type: "input", name: "website", title: "Website", placeholder: "Type your website", subtitle: '' },
    { type: "input", name: "email", title: "Email", placeholder: "Type your email", subtitle: '' },
    { type: "input", name: "password", title: "Password", placeholder: "Type your password", subtitle: 'Must be 8 characters at least' },
];

export const fieldsValidation: Validator = {
    name: loginLabsValidation.name,
    city: loginLabsValidation.city,
    address: loginLabsValidation.address,
    working_days_and_hours: loginLabsValidation.working_days_and_hours,
    telephone_number: loginLabsValidation.telephone_number,
    website: loginLabsValidation.website,
    email: loginLabsValidation.email,
    password: loginLabsValidation.password
};