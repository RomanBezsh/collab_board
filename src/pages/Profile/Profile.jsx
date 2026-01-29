import styles from "./Profile.module.css";
import { NavLink } from "react-router-dom";

export const Profile = () => {
    // Представим, что эти данные придут из твоего API
    const userBoards = [
        { id: 1, title: "Personal Tasks", color: "#4e73df" },
        { id: 2, title: "University Project", color: "#1cc88a" }
    ];

    return (
        <div className={styles.profilePage}>
            <main className={styles.profileContent}>
                {/* User info */}
                <aside className={styles.profileSidebar}>
                    <div className={styles.avatarWrapper}>
                        <img
                            className={styles.profileAvatar}
                            src="https://msiter.ru/sites/default/files/msiter_files/img_avatar.png"
                            alt="User avatar"
                        />
                    </div>

                    <div className={styles.userInfo}>
                        <h2 className={styles.username}>Username</h2>
                        <p className={styles.userRole}>Software Engineer</p>
                        <p className={styles.userBio}>Building CollabBoard with React and .NET</p>
                    </div>

                    <NavLink to="/settings" className={styles.editBtn}>
                        <i className="bi bi-pencil"></i> Edit Profile
                    </NavLink>
                </aside>

                {/* Boards and groups */}
                <section className={styles.profileMain}>
                    <h3>My Boards</h3>
                    <div className={styles.boardsGrid}>
                        {userBoards.map(board => (
                            <div key={board.id} className={styles.miniBoard}>
                                <div className={styles.boardColor} style={{backgroundColor: board.color}}></div>
                                <span>{board.title}</span>
                            </div>
                        ))}
                        {userBoards.length === 0 && <p className={styles.emptyMsg}>No boards yet.</p>}
                    </div>
                </section>
            </main>
        </div>
    );
}