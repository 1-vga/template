import { 
  emailValidator, 
  noSpecialSymbolsAloneValidator, 
  requiredValidator, 
  passwordValidator 
} from "./validators";

export const loginPersonalValidation = {
  phone_or_email:  [
    requiredValidator('The field is required'),
    emailValidator('Email is invalid'),
    noSpecialSymbolsAloneValidator("Invalid data"),
  ],
  password: [
    requiredValidator('The field is required'),
    passwordValidator('Minimum eight characters, at least one letter and one number'),
    noSpecialSymbolsAloneValidator("Invalid data"),
  ]
};
