import React, {useState} from 'react';
import Header from '../components/Header.js';
import styles from '../components/Global.module.css';
import {makeStyles} from '@material-ui/core/styles';
import SheetMusic from '../components/SheetMusic.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    navSpacing: {
        marginBottom: '10px',
        backgroundColor: 'coral',
    }
}));

const lazyLoad = (img) => {
    if(img && img.src && img.dataset.src){
        img.src = img.dataset.src
    }
};

export default function Index() {
    const classes = useStyles();
    const [showTitle, toggleShowTitle] = useState(0);

    return (
        <div className={styles.mainStage}>
            <div className={styles.centerStage}>
                <style jsx global>{`body { margin: 0px; padding: 0px; background-color: #F0EBF4 } * { box-sizing: border-box; }`}</style>
                <Header/>
                <div className={styles.headLiner}>
                    <div className={styles.frontman}>
                        <div className={styles.theBand}>
                            <div className={styles.leftSlider}>
                                <img src={'/left.svg'} alt={'Carousel slide left button graphic.'}/>
                            </div>
                            <div className={styles.hitSingle}>
                                <div className={showTitle ? `${styles.stageLeft} ${styles.visible}` : styles.stageLeft}>
                                    <img data-src={'/KytraFloraAndFaunaVisualDemo.gif'} src={'/flora_teaser.webp'}
                                    onClick={ (e) => { lazyLoad(e.target); toggleShowTitle(1);}}/>
                                    <p>Flora and Fauna</p>
                                </div>
                                <div className={styles.stageRight}>
                                    <p>A browser based idle farming game built in React. Completely hand-rolled from
                                       start to finish, Flora and Fauna was equally as fun to design as it was to build.
                                    </p>
                                    <p>Paying homage to the pixel art games of my youth, this project features some of my
                                       earliest implementations of CSS transitions and animations. Ripe with far too many
                                       hover effects, Flora and Fauna taught me some of my most treasured Do's and Don'ts
                                       of web-based game design.</p>
                                </div>
                            </div>
                            <div className={styles.rightSlider}>
                                <img src={'/left.svg'} alt={'Carousel slide right button graphic.'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.encore}>
                    <div className={styles.setList}>
                        <SheetMusic choice={0}/>
                        <SheetMusic choice={1}/>
                        <SheetMusic choice={3}/>
                        <SheetMusic choice={2}/>
                        <SheetMusic choice={4}/>
                    </div>
                    <div className={styles.animContainer}>
                        <img src={'/Kytra_nobubbles_crop.webp'} alt={'Artist depiction of Kytra holding a laptop.'}/>
                    </div>
                    <div className={styles.waterMark}>
                        <img src={'/littlebluewatermark.webp'} alt={'Kytra Selca and tiny blue mouse watermark image.'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

