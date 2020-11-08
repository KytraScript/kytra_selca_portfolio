import styles from './Header.module.css'
import React from 'react';

export default function Header() {

    return (
        <div className={`${styles.ks_header} ${styles.row} ${styles.centered}`}>
            <div className={styles.feature_text}>Kytra Selene Selca</div>
        </div>
    )

}
