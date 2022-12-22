import React from 'react';
import styles from './regular-field.module.scss';
import { Name } from './types';
import classNames from 'classnames';

interface Props {
    name: Name,
    title: string;
    inputValue: string;
    isValid: boolean;
    errorText: string | undefined;
    placeholder: string;
    handleFieldsChange: (e: React.ChangeEvent<{
        name: string | undefined;
        value: string;
    }>, name: Name) => void;
    handleFocus: (name: Name) => void;
    handleBlur: (name: Name) => void;
}

const RegularField: React.FC<Props> = (props) => {
    const { 
        name, 
        title, 
        inputValue, 
        isValid, 
        errorText, 
        placeholder, 
        handleFieldsChange, 
        handleFocus, 
        handleBlur 
    } = props;

    return <div className={styles.regularField}>
        <h2 className={styles.title}>{title}</h2>
        <div className={classNames(styles.inputContainer,  {[styles.errored]: !isValid})}>
            <input
                placeholder={placeholder}
                type="text"
                name={name}
                onChange={(e) => handleFieldsChange(e, name)}
                value={inputValue}
                onFocus={() => handleFocus(name)}
                onBlur={() => handleBlur(name)}
            />
        </div>
        {
            !isValid && <div className={styles.errorText}>{errorText}</div>
        }
    </div>
}

export default RegularField;