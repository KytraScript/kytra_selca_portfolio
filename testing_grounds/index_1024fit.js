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

                </div>
            </div>
        </div>
    );
}

//------------------- HELP ME ----------------------//
/*
        InfoPanel takes props { img_path , orientation , img_size }
        { img_path } is the relative path to the static file in the public folder ( ex. /Kytra_00.png )
        { orientation } is either 'left' or 'right' which moves the accent image to the respective side of the InfoPanel
        { img_size } is one of the following: 'large_img' | 'med_img' | 'small_img' ( 400px, 250px, 150px - respectively)
*/