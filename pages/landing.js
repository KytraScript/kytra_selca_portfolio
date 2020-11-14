import styles from '../components/Landing.module.css';
import Header from '../components/Header.js';
import React, {useState, useEffect, useRef, useCallback} from 'react';

export default function Landing() {

    const [stage, setStage] = useState(0);
    const [dialog, setDialog] = useState(0);
    const [quest, setQuest] = useState(0);
    const [hoverState, setHoverState] = useState(0);
    const [navState, setNavState] = useState(0);

    const textRef = useCallback(node => {
        if (node !== null) {
            node.addEventListener('animationend', () => {
                node.classList.add(`${styles.hideGreeting}`);
                node.classList.remove(`${styles.initGreeting}`);
                setTimeout(() => {
                    node.classList.add(`${styles.hidden}`);
                    setQuest(1);
                }, 400);
            });
        }
    }, []);

    const questRef = useCallback(node => {
        if (node !== null) {
            node.addEventListener('animationend', () => {
                setTimeout(() => {
                    node.classList.add(`${styles.hideQuest}`);
                }, 200);
            });
            node.addEventListener('animationstart', () => {
                setNavState(1);
            });
        }
    }, []);

    const navRef = useCallback(node => {
        if (node !== null) {
            node.addEventListener('animationend', () => {
                setTimeout(() => {
                    node.classList.add(`${styles.hideQuest}`);
                }, 200);
            });
        }
    }, []);

    let abc = setTimeout(() => {
        setStage(1);
    }, 2200);

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
            <div ref={questRef} className={quest ? `${styles.questContainer} ${styles['bounce-1']}` : styles.hideQuest}>
                <div className={styles.questRow}>
                    <div className={styles.landQuestion}>What Would You Like To Know?</div>
                </div>
            </div>
            <div ref={navRef} className={navState ? `${styles.navContainerVisible} ${styles.navContainer}`: styles.navContainer}>
                <div className={styles.navPadding}/>
                <div className={styles.column}>
                    <div className={styles.navBtnPadding}/>
                    <div className={styles.navButton}><img className={hoverState === 1 ? styles.pointerFinger : `${styles.hidden} ${styles.pointerFinger}`}
                                                           src={'/cursor_pixel_pointer.png'} alt={'Pointer Finger image'}/><span className={styles.navLabel} onMouseEnter={() => { setHoverState(1); }}
                                                                                                                                 onMouseOut={() => { setHoverState(0); }}>Resume</span>
                    </div>
                    <div className={styles.navButton}><img className={hoverState === 2 ? styles.pointerFinger : `${styles.hidden} ${styles.pointerFinger}`}
                                                           src={'/cursor_pixel_pointer.png'} alt={'Pointer Finger image'}/><span className={styles.navLabel} onMouseEnter={() => { setHoverState(2); }}
                                                                                                                                 onMouseOut={() => { setHoverState(0); }}>Projects</span>
                    </div>
                    <div className={styles.navBtnPadding}/>
                </div>
                <div className={styles.column}>
                    <div className={styles.navBtnPadding}/>
                    <div className={styles.navButton}><img className={hoverState === 3 ? styles.pointerFinger : `${styles.hidden} ${styles.pointerFinger}`}
                                                           src={'/cursor_pixel_pointer.png'} alt={'Pointer Finger image'}/><span className={styles.navLabel} onMouseEnter={() => { setHoverState(3); }}
                                                                                                                                 onMouseOut={() => { setHoverState(0); }}>About Me</span>
                    </div>
                    <div className={styles.navButton}><img className={hoverState === 4 ? styles.pointerFinger : `${styles.hidden} ${styles.pointerFinger}`}
                                                           src={'/cursor_pixel_pointer.png'} alt={'Pointer Finger image'}/><span className={styles.navLabel} onMouseEnter={() => { setHoverState(4); }}
                                                                                                                                 onMouseOut={() => { setHoverState(0); }}>Blog Posts</span>
                    </div>
                    <div className={styles.navBtnPadding}/>
                </div>
                <div className={styles.navPadding}/>
            </div>
        </div>
    );

}
