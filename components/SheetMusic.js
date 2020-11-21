import styles from './SheetMusic.module.css'
import React from 'react';

export default function SheetMusic({ choice }) {
    const colors = [styles.themeRed, styles.themeYellow, styles.themeGreen, styles.themePurple, styles.themeOrange];
    const textColor = [styles.textRed, styles.textYellow, styles.textGreen, styles.textPurple, styles.textOrange];
    const svgs = ['/about.svg', '/resume.svg', '/joystick.svg', '/data.svg', '/blog.svg'];
    const labels = ['Personal', 'Experience', 'Game Projects', 'Web Apps', 'Blog Posts'];

    return (
        <div className={styles.sheetMusic}>
            <div className={`${styles.icon} ${colors[choice]}`}>
                <img src={svgs[choice]} alt={'Button image depicting the ' + labels[choice] + ' content.'}/>
            </div>
            <div className={`${styles.iconLabel} ${textColor[choice]}`}>{labels[choice]}</div>
        </div>
    )
};
