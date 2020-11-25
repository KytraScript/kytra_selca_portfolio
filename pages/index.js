import React, {useState, useEffect} from 'react';
import Header from '../components/Header.js';
import styles from '../components/Global.module.css';
import SheetMusic from '../components/SheetMusic.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FloraAndFauna from '../components/FloraAndFauna.js';
import OffByOne from '../components/OneAway.js';
import DinoDerby from '../components/DinoDerby.js';
import PotionHelper from '../components/PotionExplosionHelper.js';
import DonationTracker from '../components/DonationTracker.js';


export default function Index() {

    const games = [<FloraAndFauna/>, <DinoDerby/>, <OffByOne/>];
    const webApps = [<DonationTracker/>, <PotionHelper/>];
    const [gameView, setGameView] = useState(0);
    const [appView, setAppView] = useState(0);
    const [activeSlider, setActiveSlider] = useState(0);

    const incrementView = () => {
        let next;
        if(activeSlider === 2){
            next = appView + 1;
            setAppView(next);
        } else if(activeSlider === 3){
            next = gameView + 1;
            setGameView(next);
        }

    };

    const decrementView = () => {
        let next;
        if(activeSlider === 2){
            next = appView - 1;
            setAppView(next);
        } else if(activeSlider === 3){
            next = gameView - 1;
            setGameView(next);
        }
    };

    const changeSlider = (topic) => {
        setActiveSlider(topic);
    };

    useEffect( () => {

        if(activeSlider === 3){
            if(gameView > games.length - 1){
                setGameView(0);
            } else if(gameView < 0){
                setGameView(games.length - 1);
            }
        } else if(activeSlider === 2){
            if(appView > webApps.length - 1){
                setAppView(0);
            } else if(appView < 0){
                setAppView(webApps.length - 1);
            }
        }

    }, [gameView, appView]);

    return (
        <div className={styles.mainStage}>
            <div className={styles.centerStage}>
                <style jsx global>{`body { margin: 0px; padding: 0px; background-color: #F0EBF4 } * { box-sizing: border-box; }`}</style>
                <Header/>
                <div className={styles.headLiner}>
                    <div className={styles.frontman}>
                        <div className={styles.leftSlider} onClick={decrementView}>
                            <img src={'/left.svg'} alt={'Carousel slide left button graphic.'}/>
                        </div>
                        <div className={styles.rightSlider} onClick={incrementView}>
                            <img src={'/left.svg'} alt={'Carousel slide right button graphic.'}/>
                        </div>
                        <div className={styles.theBand}>
                            {activeSlider === 0 ? '' : ''}
                            {activeSlider === 1 ? '' : ''}
                            {activeSlider === 2 ? webApps[appView] : ''}
                            {activeSlider === 3 ? games[gameView] : ''}
                            {activeSlider === 4 ? '' : ''}
                        </div>
                    </div>
                </div>
                <div className={styles.encore}>
                    <div className={styles.setList}>
                        <SheetMusic choice={0} clickety={changeSlider}/>
                        <SheetMusic choice={1} clickety={changeSlider}/>
                        <SheetMusic choice={2} clickety={changeSlider}/>
                        <SheetMusic choice={3} clickety={changeSlider}/>
                        <SheetMusic choice={4} clickety={changeSlider}/>
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

