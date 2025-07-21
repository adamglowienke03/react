import { useState } from "react";

interface InputProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

export function Input({ placeholder, type }: InputProps) {
    const [value, setValue] = useState('ronaldo');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        console.log(e.target.value);
    };
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className="input"
        />
    );
}