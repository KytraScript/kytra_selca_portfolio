import React from 'react';
import InfoPanel from '../components/InfoPanel.js';
import Header from '../components/Header.js';
import styles from '../components/Global.module.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TwitterIcon from '@material-ui/icons/Twitter';
import SheetMusic from '../components/SheetMusic.js';

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

export default function Index() {
    const classes = useStyles();

    return (
        <div className={styles.mainStage}>
            <div className={styles.centerStage}>
                <style jsx global>{`body { margin: 0px; padding: 0px; background-color: #F0EBF4 } * { box-sizing: border-box; }`}</style>
                <Header/>
                <div className={styles.headLiner}>
                        <div className={styles.frontman}>

                        </div>
                </div>
                <div className={styles.encore}>
                    <div className={styles.setList}>
                        <SheetMusic choice={0}/>
                        <SheetMusic choice={1}/>
                        <SheetMusic choice={2}/>
                        <SheetMusic choice={3}/>
                        <SheetMusic choice={4}/>
                    </div>
                    <div className={styles.animContainer}>
                        <img src={'/Kytra_nobubbles_crop.webp'} alt={'Artist depiction of Kytra holding a laptop.'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

