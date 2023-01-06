import React, { useState } from 'react';
import styles from './login.module.scss';
import RegularField from '../regular-field/regular-field';
import { Fields, FieldName, MappedField } from './types';
import { phone_or_email, password, loginFields, fieldsValidation } from './fields';

interface Props {
}

const Login: React.FC<Props> = (props) => {
    const [fields, setFields] = useState<Fields>({ phone_or_email, password });

    const handleFieldsChange = (e: React.ChangeEvent<{ name: string | undefined; value: string; }>, name: FieldName) => {
        setFields((prevState) => ({
            ...prevState, [name]: { ...prevState[name], value: e.target.value.trim(), isValid: true }
        }));
    };

    const handleFocus = (name: FieldName) => {
        setFields((prevState) => ({ ...prevState, [name]: { ...prevState[name], isValid: true } }));
    };

    const handleBlur = (name: FieldName) => {
        let errorText = "";

        fieldsValidation[name].forEach((validator) => {
            if (errorText) {
                return;
            }

            const fieldErrorText = validator(fields[name].value);

            if (fieldErrorText) {
                errorText = fieldErrorText;
            }

            setFields((prevState) => ({
                ...prevState,
                [name]: {
                    ...prevState[name], isValid: !errorText, errorText, touched: errorText
                }
            }));
        });
    };

    const validate = () => {
        let isValid = true;

        loginFields.forEach((field: MappedField) => {
            let errorText = "";
            fieldsValidation[field.name].forEach((validator) => {
                if (errorText) {
                    return;
                }

                const fieldErrorText = validator(fields[field.name].value);

                if (fieldErrorText) {
                    isValid = false;
                    errorText = fieldErrorText;
                }

                setFields((prevState) => ({
                    ...prevState,
                    [field.name]: { ...prevState[field.name], isValid: !errorText, errorText },
                }));
            });
        });

        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = validate();

        if (isValid) {
            console.log('valid personal');
        }
    };

    return <form onSubmit={handleSubmit} className={styles.login}>
        {
            loginFields.map(field => {
                return <RegularField
                    key={field.name}
                    name={field.name}
                    title={field.title}
                    inputValue={fields[field.name].value}
                    placeholder={field.placeholder}
                    subtitle={field.subtitle}
                    isValid={fields[field.name].isValid}
                    errorText={fields[field.name].errorText}
                    handleFieldsChange={handleFieldsChange}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                />
            })
        }
        <button type='submit' className={styles.button}>Sign in</button>
    </form>
}

export default Login;