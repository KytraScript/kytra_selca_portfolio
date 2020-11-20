import styles from './SheetMusic.module.css'
import React from 'react';
import DescriptionIcon from '@material-ui/icons/Description';

export default function SheetMusic({ choice }) {
    const colors = [styles.themeRed, styles.themeYellow, styles.themeGreen, styles.themeBlue, styles.themeOrange];

    return (
        <div className={styles.sheetMusic}>
            <div className={`${styles.icon} ${colors[choice]}`}>
                <DescriptionIcon/>
            </div>
            <div className={styles.iconLabel}>About Me</div>
        </div>
    )

}
