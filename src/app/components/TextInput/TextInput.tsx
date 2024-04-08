import React from 'react';
import styles from './TextInput.module.css';

interface TextInputProps {
    type?: string;
    placeholder?: string;
    className?: string; // Optional custom className
    rightIcon?: any;
    name?: string;
    value?: string;
}

const TextInput = ({
    type = 'text',
    placeholder = '',
    className,
    rightIcon,
    name,
    value,
}: TextInputProps) => {
    return (
        <div className={`${styles.inputWrapper} ${className}`}>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                className={styles.input}
            />
            {/* {rightIcon && rightIcon} */}
            {rightIcon && <button className={styles.button}>Join</button>}
        </div>
    );
};

export default TextInput;