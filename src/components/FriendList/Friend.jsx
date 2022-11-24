import styles from './FriendList.module.css';

export const friendItem = ({ avatar, name, isOnline, id }) => (
  <li className={styles.item} key={id}>
    <span className={isOnline ? styles.statusTrue : styles.statusFalse}></span>
    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);
