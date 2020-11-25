import styles from './hitSingle.module.css';
import React, {useState} from 'react';

const lazyLoad = (img) => {
    if (img && img.src && img.dataset.src) {
        img.src = img.dataset.src;
    }
};

const DonationTracker = () => {

    const [showTitle, toggleShowTitle] = useState(0);

    return (
        <div className={styles.hitSingle}>
            <div className={showTitle ? `${styles.stageLeft} ${styles.visible}` : styles.stageLeft}>
                <img data-src={'/donation_preview.gif'} src={'/donation_teaser.webp'}
                     onClick={(e) => {
                         lazyLoad(e.target);
                         toggleShowTitle(1);
                     }}/>
                <p>Donation Tracker | 2020</p>
            </div>
            <div className={styles.stageRight}>
                <p>I created this app for tracking pledges and fully paid donations from Galvanize employees nationwide as they gave from their
                   hearts to support Adopt-a-Classroom during the COVID-19 relief drive. Powered by React with Hooks, D3.js,
                   Node.js (Express) and AWS RDS (mySQL). You can<a className={`${styles.noDeco} ${styles.textYellow}`}
                                                                                                href={'http://kytra-galvanize-aac-tracker.us-west-2.elasticbeanstalk.com/'}> play with this application here.</a>
                </p>
                <p>
                    <a className={`${styles.noDeco} ${styles.textPurple}`}
                       href={'https://d3js.org/'}> D3.js</a> was easily one of my favorite parts of this project. The Arc Gauge, featuring custom CSS to
                    match the Galvanize theme, was enjoyable and I look forward to more opportunities to work with the
                    D3.js library. An additionally exciting exercise was providing the proper meta tags to allow for websites and
                    chat platforms to unfurl shared links of this project.
                </p>
            </div>
        </div>
    );
};



module.exports = DonationTracker;
