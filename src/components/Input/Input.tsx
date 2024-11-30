import { useState } from "react";
import Backend from "src/middleware/Backend";

import "./Input.css";

type FormState = "disabled" | "enabled" | "loading" | "success" | "fail";
type Props = {
    className?: string;
}

function Loader() {
    return (
        <div className="loader"></div>
    );
}

const formStates = {
    disabled: {
        disabled: true,
        label: "Sign up"
    },
    enabled: {
        disabled: false,
        label: "Sign up",
    },
    loading: {
        disabled: true,
        label: <Loader />
    },
    success: {
        disabled: true,
        label: "Success",
    },
    fail: {
        disabled: true,
        label: "Failed",
    },
}

export default function Input({ className }: Props) {
    const [value, setValue] = useState<string>("");
    const [formState, setFormState] = useState<FormState>("disabled");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setValue(target.value);
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(target.value)) {
            setFormState("enabled");
        } else {
            setFormState("disabled");
        }
    }

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        setFormState("loading");
        const res: any = await Backend.subscribeEmail(value);

        if (res.status === 200) {
            setFormState("success");
            setErrorMessage(null);
        } else {
            setFormState("fail");
            setErrorMessage(res.response.data.message);
        }
    }

    return (
        <form
            className={`input__form${className ? ` ${className}` : ""}`}
            onSubmit={handleSubmit}
        >
            <label className="input">
                <input
                    className="input__field"
                    type="text"
                    value={value}
                    onChange={handleChange}
                />

                <span className={`input__placeholder${!!value ? " input__placeholder_hidden" : ""}`}>Type your e-mail...</span>

                <button
                    className="input__btn"
                    type="submit"
                    disabled={formStates[formState].disabled}
                >
                    
                    {formState !== "loading"
                        ? <span className="input__btn-text">{formStates[formState].label}</span>
                        : formStates[formState].label
                    }
                </button>
            </label>

            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
    );
}