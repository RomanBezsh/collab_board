import styles from "./Notifications.module.css"; // Создайте этот файл
import { NotificationCard } from "../../components/NotificationCard/NotificationCard";
export const Notifications = () => {

    const notifications = [
        { id: 1, title: "New Project Assigned", desc: "You were added to 'Marketing Campaign'", time: "5 mins ago", unread: true },
        { id: 2, title: "Comment on Task", desc: "Alex left a comment: 'Please check the latest design'", time: "2 hours ago", unread: false },
    ];

    return (
        <div className={styles.notificationsPage}>
            <main className={styles.dashboardContent}>
                <h2>Notifications</h2>

                <div className={styles.notificationList}>
                    {notifications.map(item => (
                        <NotificationCard
                            title={item.title}
                            desc={item.desc}
                            time={item.time}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}