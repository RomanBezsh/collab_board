import styles from './NotificationCard.module.css';


export const NotificationCard = ({title, desc, time, unread}) => {
    return (
        <div className={`${styles.notificationCard} ${unread ? styles.unread : ""}`}>
            <div className={styles.statusDot}></div>
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{desc}</p>
                <p className={styles.time}>{time}</p>
            </div>
        </div>
    );
}