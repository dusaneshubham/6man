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
    rows?: number,
    cols?: number;
}

const TextInput = ({
    type = 'text',
    placeholder = '',
    className,
    inputClassName,
    rightIcon,
    name,
    value,
}: TextInputProps) => {
    return (
        <div className={`${styles.inputWrapper} ${className}`}>
            {
                type === 'textarea' ?
                    <textarea
                        placeholder={placeholder}
                        className={styles.input}
                    />
                    :
                    <input
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        className={`${styles.input} ${inputClassName}`}
                    />
            }

            {rightIcon && <button className={styles.button}>Join</button>}
        </div>
    );
};

export default TextInput;