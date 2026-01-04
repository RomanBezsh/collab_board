import {NavLink} from "react-router-dom";
import styles from './Header.module.css';

export const Header = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <NavLink to="/dashboard">CollabBoard</NavLink>
                <NavLink to="/create">Create</NavLink>
                <NavLink to="/notifications">Notifications</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        </header>
    );
}

