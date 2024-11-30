import "./Login.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Backend from "../../middleware/Backend";

const Alert = ({ error }: { error: string | null }) => error ? (<div id="alert_msg" className="alert alert-warning"><b>Error: </b> {error}</div>) : null;

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res: any = await Backend.login(email, password);

        if (res.status === 200) {
            navigate('/admin');
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="login-container">
            <h2>Hello Again👋</h2>

            <form onSubmit={handleSubmit} className="login-form">
                <div className="input">
                    <input type="text" name="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} className="input__field" />
                </div>
                <div className="input">
                    <input type="password" name="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} className="input__field" />
                </div>
                <Alert error={error} />
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}