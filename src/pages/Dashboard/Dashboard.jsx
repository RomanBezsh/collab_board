import { Header } from "../../components/Header/Header.jsx";
import styles from "./Dashboard.module.css";

export const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <main className={styles.dashboardContent}>
                <h2>My Boards</h2>
                <div className={styles.boards}>

                    <div className={`${styles.board} ${styles.createBoard}`}>
                        <div className={styles.plusIcon}>
                            <i className="bi bi-plus-lg"></i>
                        </div>
                        <p className={styles.createText}>Create New Board</p>
                    </div>

                    <div className={styles.board}>
                        <img src="./example.jpg" alt="Preview" />
                        <div className={styles.boardInfo}>
                            <p className={styles.title}>Project 1</p>
                            <p>Edited 2 hours ago</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}