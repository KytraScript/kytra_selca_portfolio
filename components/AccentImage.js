import styles from './AccentImage.module.css'
import React from 'react';

export default function AccentImage({ path, position, size }) {

    return (
            <div className={`${styles[size]} ${styles.ks_accent_img} ${styles[position]}`}>
                <img src={ path } className={`${styles.circle} ${styles.relative}`}
                     alt={'Drawn image showing a depiction of Kytra.'}/>
            </div>
    )
}
