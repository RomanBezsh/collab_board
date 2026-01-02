import { Header } from "../../components/Header/Header.jsx";
import styles from "./Dashboard.module.css"; // Предполагая, что ты используешь CSS Modules

export function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <Header />
            <main className={styles.dashboardContent}>
                <h2>My Boards</h2>
                <div className={styles.boards}>

                    <div className={`${styles.board} ${styles.createBoard}`}>
                        <div className={styles.plusIcon}>+</div>
                        <p className={styles.title}>Create New Board</p>
                    </div>

                    <div className={styles.board}>
                        <img src="https://via.placeholder.com/250x140?text=Board+Preview" alt="Preview" />
                        <div className={styles.boardInfo}>
                            <p className={styles.title}>Marketing Campaign</p>
                            <p>Edited 2 hours ago</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}