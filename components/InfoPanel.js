import styles from './InfoPanel.module.css'
import AccentImage from './AccentImage.js'
import React from 'react';

export default function InfoPanel({ img_path, orientation, img_size }) {

    return (
        <div className={`${styles.ks_panel} ${styles.row}`}>
            <AccentImage path={ img_path } position={ orientation } size={ img_size }/>
        </div>
    )

}
