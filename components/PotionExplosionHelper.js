import styles from './hitSingle.module.css';
import React, {useState} from 'react';

const lazyLoad = (img) => {
    if (img && img.src && img.dataset.src) {
        img.src = img.dataset.src;
    }
};

const PotionHelper = () => {

    const [showTitle, toggleShowTitle] = useState(0);

    return (
        <div className={styles.hitSingle}>
            <div className={showTitle ? `${styles.stageLeft} ${styles.visible}` : styles.stageLeft}>
                <img data-src={'/potion_preview.gif'} src={'/potion_teaser.webp'}
                     onClick={(e) => {
                         lazyLoad(e.target);
                         toggleShowTitle(1);
                     }}/>
                <p>Potion Helper | 2020</p>
            </div>
            <div className={styles.stageRight}>
                <p>Potion Explosion Helper is designed to make starting and managing a game of Potion Explosion into a piece of cake.
                   Using <a className={`${styles.noDeco} ${styles.textOrange}`}
                            href={'https://nextjs.org/'}> NextJS</a> and <a className={`${styles.noDeco} ${styles.textGreen}`}
                                                                            href={'https://material-ui.com/'}> Material-UI</a>,
                   this application features a highly functional and minimalistic design to make navigating game
                   setup feel as smooth as possible.
                </p>
                <p>
                    While Potion Explosion is an excellent game, the physical pieces are quite fragile and setup will have you juggling
                    several pieces of potion-shaped cardboard. I created this app to save myself the trouble of learning to juggle and to preserve the life
                    of one of my favorite board games. It shuffles pieces, randomizes game setup and even saves your game history in local storage.
                </p>
            </div>
        </div>
    );
};

module.exports = PotionHelper;
