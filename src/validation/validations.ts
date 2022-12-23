import { 
  noSpecialSymbolsAloneValidator, 
  requiredValidator, 
  passwordValidator,
  emailAndPhoneValidator,
  nameLastNameValidator,
  phoneValidator,
  websiteValidator,
  emailValidator,
  daysHours
} from "./validators";

export const loginPersonalValidation = {
  phone_or_email:  [
    requiredValidator('The field is required'),
    emailAndPhoneValidator('Email or phone is invalid'),
  ],
  password: [
    requiredValidator('The field is required'),
    passwordValidator('Minimum eight characters, at least one letter and one number'),
    noSpecialSymbolsAloneValidator("Invalid data"),
  ]
};

export const loginLabsValidation = {
  name: [
    requiredValidator('The field is required'),
    nameLastNameValidator('Invalid name'),
  ],
  city: [
    requiredValidator('The field is required'),
    noSpecialSymbolsAloneValidator("Invalid data"),
  ],
  address: [
    requiredValidator('The field is required'),
    noSpecialSymbolsAloneValidator("Invalid data"),
  ],
  working_days_and_hours: [
    requiredValidator('The field is required'),
    daysHours('Invalid format')
  ],
  telephone_number: [
    requiredValidator('The field is required'),
    phoneValidator('Telephone number is invalid')
  ],
  website: [
    requiredValidator('The field is required'),
    websiteValidator('Invalid website')
  ],
  email: [
    requiredValidator('The field is required'),
    emailValidator('Invalid email')
  ],
  password: [
    requiredValidator('The field is required'),
    passwordValidator('Minimum eight characters, at least one letter and one number'),
    noSpecialSymbolsAloneValidator("Invalid data"),
  ]
}