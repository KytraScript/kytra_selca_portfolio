import styles from './Header.module.css'
import React from 'react';

export default function Header() {

    return (
        <div className={`${styles.ks_header} ${styles.row}`}>
            <div className={styles.logo}>
                <img src={'/lightbluemouse.webp'} alt={'site logo'}/>
            </div>
            {/*<div className={styles.feature_text}>Kytrascript</div>*/}
        </div>
    )

}
