import React from 'react';
import styles from './TextInput.module.css';

interface TextInputProps {
    type?: string;
    placeholder?: string;
    className?: string; // Optional custom className
    inputClassName?: string;
    rightIcon?: any;
    name?: string;
    value?: string;
    onChange?: (e:any) => void;
}

const TextInput = ({
    type = 'text',
    placeholder = '',
    className,
    inputClassName,
    rightIcon,
    name,
    value,
    onChange,
}: TextInputProps) => {
    return (
        <div className={`${styles.inputWrapper} ${className}`}>
            {
                type === 'textarea' ?
                    <textarea
                        placeholder={placeholder}
                        onChange={onChange}
                        className={`${styles.input} ${inputClassName}`}
                    />
                    :
                    <input
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        className={`${styles.input} ${inputClassName}`}
                        onChange={onChange}
                    />
            }

            {rightIcon && <button className={styles.button}>Join</button>}
        </div>
    );
};

export default TextInput;