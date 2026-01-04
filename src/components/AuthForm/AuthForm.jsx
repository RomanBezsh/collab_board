import styles from './AuthForm.module.css';
import { NavLink } from "react-router-dom";




export const AuthForm = ({title, onSubmit, buttonText, linkData, children }) => {



    return (
        <form onSubmit={onSubmit}>
            <h2 className={styles.formTitle}>{title}</h2>
            {children}
            <span className={styles.authText}>
                  {linkData.text}{' '}
                <NavLink to={linkData.linkTo} className={styles.authLink}>
                    {linkData.linkText}
                </NavLink>
            </span>
            <button className={styles.authButton} type="submit">
                {buttonText}
            </button>
        </form>
    )
}

















