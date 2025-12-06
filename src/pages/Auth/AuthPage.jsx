import styles from "./AuthPage.module.css";
import React, { useState } from "react";

export function AuthPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });

    const validateEmail = (value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value) {
            setErrors((prev) => ({ ...prev, email: "Email is required" }));
            return false;
        } else if (!emailRegex.test(value)) {
            setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
            return false;
        } else {
            setErrors((prev) => ({ ...prev, email: "" }));
            return true;
        }
    };

    const validatePassword = (value) => {
        if (!value) {
            setErrors((prev) => ({ ...prev, password: "Password is required" }));
            return false;
        } else if (value.length < 8) {
            setErrors((prev) => ({ ...prev, password: "Password must be at least 8 characters" }));
            return false;
        } else {
            setErrors((prev) => ({ ...prev, password: "" }));
            return true;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        if (isEmailValid && isPasswordValid) {
            console.log("Submitted:", { email, password });
            // здесь можно вызвать API для авторизации
        }
    };

    return (
        <div className={styles.authPage}>
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>

                <div className={styles.formGroup}>
                    <label htmlFor="email-input">Email</label>
                    <input
                        type="email"
                        id="email-input"
                        name="email"
                        className={styles.authInput}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={(e) => validateEmail(e.target.value)}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password-input">Password</label>
                    <input
                        type="password"
                        id="password-input"
                        name="password"
                        className={styles.authInput}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={(e) => validatePassword(e.target.value)}
                    />
                    {errors.password && <span className={styles.errorText}>{errors.password}</span>}
                </div>

                <span className={styles.authText}>
                  Don’t have an account? <a href="/register">Sign up now!</a>
                </span>

                <button className={styles.authButton} type="submit">
                    Sign In
                </button>
            </form>
        </div>
    );
}
