import styles from "./RegisterPage.module.css";
import React from "react";

export function RegisterPage() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("RegisterPage Submitted");
    };

    return (
        <div className={styles.registerPage}>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

                <div className={styles.formGroup}>
                    <label htmlFor="email-input">Email</label>
                    <input type="email" id="email-input" name="email" className={styles.registerInput} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="display-name-input">Display name</label>
                    <input type="text" id="display-name-input" name="name" className={styles.registerInput} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password-input">Password</label>
                    <input type="password" id="password-input" name="password" className={styles.registerInput} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="confirm-password-input">Confirm Password</label>
                    <input type="password" id="confirm-password-input" name="confirmPassword" className={styles.registerInput} />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.registerCheckbox}>
                        <input type="checkbox" name="terms" />
                        I agree with policy
                    </label>
                </div>
                <span className={styles.registerText}>
                  Do you have an account? <a href="/">Sign in now!</a>
                </span>
                <input className={styles.registerButton} type="submit" value="Sign Up" />
            </form>
        </div>
    );
}
