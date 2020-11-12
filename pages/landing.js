import styles from '../components/Landing.module.css';
import Header from '../components/Header.js';
import React, {useState, useEffect, useRef, useCallback} from 'react';

export default function Landing() {

    const [stage, setStage] = useState(0);
    const [dialog, setDialog] = useState(0);

    const textRef = useCallback( node => {
        if(node !== null){
            node.addEventListener('animationend', () => {
                node.classList.add(`${styles.hideGreeting}`);
                node.classList.remove(`${styles.initGreeting}`);
            });
        }
    }, []);

    let abc = setTimeout(() => {
        setStage(1);
    }, 2500);

    let def = setTimeout(() => {
        setDialog(1);
    }, 400);

    return (
        <div className={styles.pageContainer}>
            <style jsx global>{`body { margin: 0px; padding: 0px; background-color: #F0EBF4 } * { box-sizing: border-box; }`}</style>
            <div className={stage ? styles.animHeader : styles.hideHeader}>
                <Header/>
            </div>
            <div className={styles.animContainer}>
                <div ref={textRef} className={dialog ? `${styles.initGreeting} ${styles.bounce}` : styles.hideGreeting}>Hello!</div>
                <img id={'animImage'} className={stage ? styles.animShrink : styles.animStart} src={'/Kytra_nobubbles_crop.webp'}
                     alt={'Artist depiction of Kytra cheerfully holding a laptop.'}/>
            </div>
        </div>
    );

}
