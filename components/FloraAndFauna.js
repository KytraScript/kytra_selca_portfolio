import styles from './hitSingle.module.css';
import React, { useState } from 'react';

const lazyLoad = (img) => {
    if(img && img.src && img.dataset.src){
        img.src = img.dataset.src
    }
};

const FloraAndFauna = () => {

    const [showTitle, toggleShowTitle] = useState(0);

    return (
        <div className={styles.hitSingle}>
            <div className={showTitle ? `${styles.stageLeft} ${styles.visible}` : styles.stageLeft}>
                <img data-src={'/KytraFloraAndFaunaVisualDemo.gif'} src={'/flora_teaser.webp'}
                     onClick={(e) => {
                         lazyLoad(e.target);
                         toggleShowTitle(1);
                     }}/>
                <p>Flora and Fauna</p>
            </div>
            <div className={styles.stageRight}>
                <p>A browser based idle farming game built in React. This was my first full-fledged project
                   to make use of the React Context API for tracking game state. Completely hand-rolled from
                   start to finish, Flora and Fauna was equally as fun to design as it was to build.
                </p>
                <p>Paying homage to the pixel art games of my youth, this project features some of my
                   earliest implementations of CSS transitions and animations. Ripe with far too many
                   hover effects, Flora and Fauna taught me some of my most treasured Do's and Don'ts
                   of web-based game design.</p>
            </div>
        </div>
    );
};

module.exports = FloraAndFauna;
