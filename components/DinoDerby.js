import styles from './hitSingle.module.css';
import React, { useState } from 'react';

const lazyLoad = (img) => {
    if(img && img.src && img.dataset.src){
        img.src = img.dataset.src
    }
};

const DinoDerby = () => {

    const [showTitle, toggleShowTitle] = useState(0);

    return (
        <div className={styles.hitSingle}>
            <div className={showTitle ? `${styles.stageLeft} ${styles.visible}` : styles.stageLeft}>
                <img data-src={'/dinoderby_preview.gif'} src={'/dinoderby_teaser.webp'}
                     onClick={(e) => {
                         lazyLoad(e.target);
                         toggleShowTitle(1);
                     }}/>
                <p>Dino Derby | 2019</p>
            </div>
            <div className={styles.stageRight}>
                <p>
                    Dino Derby was a project that served two purposes. Created with <a className={`${styles.textPurple} ${styles.noDeco}`}
                                                                                       href={'https://reactnative.dev/docs/0.60/getting-started'}>React Native and Expo</a>,
                    this project allowed me to explore mobile game development and sprite animations.
                    Custom sprite animations can be quite tricky in React & React Native and this problem was one of my favorites to solve.
                </p>
                <p>
                    The Dino's AI logic features a random algorithm working with CSS transitions to determine their next move in one second
                    intervals. Every match is different and any of the four dinosaurs stand the same chance at winning. The winning Dino is the closest
                    to the right hand side of the screen after twenty seconds expires. Time to place your bets!
                </p>
            </div>
        </div>
    );
};

module.exports = DinoDerby;
