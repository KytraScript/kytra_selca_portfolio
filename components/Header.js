import styles from './Header.module.css';
import React from 'react';

export default function Header() {

    return (
        <div className={`${styles.ks_header} ${styles.row}`}>
            <div className={styles.logo}>
                <img src={'/littlebluemouse.webp'} alt={'site logo'}/>
            </div>
            <div className={`${styles.ks_navBar} ${styles.row}`}>
                <div className={`${styles.navLink} ${styles.textRed}`}>LinkedIn</div>
                <div className={`${styles.navLink} ${styles.textGreen}`}>Twitter</div>
                <div className={`${styles.navLink} ${styles.textOrange}`}>Email</div>
                <div className={`${styles.navLink} ${styles.textPurple}`}>About</div>
            </div>
        </div>
    );

}
