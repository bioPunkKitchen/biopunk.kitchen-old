import React from 'react';
import Helmet from 'react-helmet';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import './global.css';
import styles from './layout.module.css';


export default ({ type, children }) => {

    return (
        <div>
            <Helmet
                title="bioPUNK.kitchen"
                meta={[
                    { name: 'description', content: 'Community based biology studio & science atelier at the gates of Berlin' },
                    { name: 'lang', content: 'en' }
                ]}
            />
            <Header background={type}/>
            <div className={styles.main}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};
