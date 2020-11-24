import styles from './hitSingle.module.css';
import React, { useState } from 'react';

const lazyLoad = (img) => {
    if(img && img.src && img.dataset.src){
        img.src = img.dataset.src
    }
};

const OffByOne = () => {

    const [showTitle, toggleShowTitle] = useState(0);

    return (
        <div className={styles.hitSingle}>
            <div className={showTitle ? `${styles.stageLeft} ${styles.visible}` : styles.stageLeft}>
                <img data-src={'/offbyone_preview.gif'} src={'/offbyone_title.webp'}
                     onClick={(e) => {
                         lazyLoad(e.target);
                         toggleShowTitle(1);
                     }}/>
                <p>Off By One!</p>
            </div>
            <div className={styles.stageRight}>
                <p>
                    A browser based tribute to one of my favorite The Price is Right games, <a className={`${styles.textRed} ${styles.noDeco}`} href={'https://priceisright.fandom.com/wiki/One_Away'}>One Away</a>. Quite possibly my earliest attempt at a browser based game, I created this project out of a desire to work with my own hand-rolled
                    modern car pricing API, as well as a theme filled with brighter colors and CSS transitions that humbly
                    mimicked the set of the famous One Away.
                </p>
                <p>
                    Making use of MongoDB and Amazon S3 for API requests fetching car data and images,
                    the backend stands as the most impressive part of this game. I wish I knew then what I know now.
                </p>
            </div>
        </div>
    );
};

module.exports = OffByOne;
