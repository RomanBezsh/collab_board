import {NavLink} from "react-router-dom";
import styles from './Header.module.css';

export function Header() {

    return (
        <div className={styles.header}>
            <nav className="navigation">
                <NavLink to="/dashboard">CollabBoard</NavLink>
                <NavLink>Create</NavLink>
                <NavLink>Notifications</NavLink>
                <NavLink>Profile</NavLink>
            </nav>
        </div>
    );
}

