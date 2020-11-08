import React from 'react';
import InfoPanel from '../components/InfoPanel.js';
import Header from '../components/Header.js';
import styles from '../components/Global.module.css';

export default function Index() {

    return (
        <div>
            <style jsx global>{`body { margin: 0px; padding: 0px; background-color: #F0EBF4 } * { box-sizing: border-box; }`}</style>
            <Header/>
            <div className={`${styles.col} ${styles.centered}`}>
                <InfoPanel img_path={'/Kytra_01.png'} orientation={'left'} img_size={'med_img'}/>
                <InfoPanel img_path={'/Kytra_02.png'} orientation={'right'} img_size={'med_img'}/>
                <InfoPanel img_path={'/Kytra_00.png'} orientation={'left'} img_size={'med_img'}/>
            </div>
            <div className={'ks_footer'}>
                Footer
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
