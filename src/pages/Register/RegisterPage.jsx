import styles from "../Auth/AuthPage.module.css"
import React from "react";
import {AuthForm} from "../../components/AuthForm/AuthForm.jsx";

export function RegisterPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("RegisterPage Submitted");
    };

    return (
        <div className={styles.authPage}>
            <AuthForm
                title='Sign Up'
                onSubmit={handleSubmit}
                buttonText='Sign Up'
                linkData={{
                    text: 'Do you have an account?',
                    linkTo: '/',
                    linkText: 'Sign In now!',
                }}
            >
                <div className={styles.formGroup}>
                    <label htmlFor="email-input">Email</label>
                    <input type="email" id="email-input" name="email" className={styles.authInput} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="display-name-input">Display name</label>
                    <input type="text" id="display-name-input" name="name" className={styles.authInput} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password-input">Password</label>
                    <input type="password" id="password-input" name="password" className={styles.authInput} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="confirm-password-input">Confirm Password</label>
                    <input type="password" id="confirm-password-input" name="confirmPassword" className={styles.authInput} />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.authCheckbox}>
                        <input type="checkbox" name="terms" />
                        I agree with policy
                    </label>
                </div>
            </AuthForm>
        </div>
    );
}
