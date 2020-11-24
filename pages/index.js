import React, {useState, useEffect} from 'react';
import Header from '../components/Header.js';
import styles from '../components/Global.module.css';
import SheetMusic from '../components/SheetMusic.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FloraAndFauna from '../components/FloraAndFauna.js';
import OffByOne from '../components/OneAway.js';
import DinoDerby from '../components/DinoDerby.js';


export default function Index() {

    const games = [<FloraAndFauna/>, <DinoDerby/>, <OffByOne/>];
    const [gameView, setGameView] = useState(0);

    const incrementView = () => {
        let next = gameView + 1;
        setGameView(next);
    };

    const decrementView = () => {
        let next = gameView - 1;
        setGameView(next);
    };

    useEffect( () => {
        if(gameView > games.length - 1){
            setGameView(0);
        } else if(gameView < 0){
            setGameView(games.length - 1);
        }
    }, [gameView]);

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
                            {games[gameView]}
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

