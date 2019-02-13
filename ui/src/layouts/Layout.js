import React from 'react';
import Helmet from 'react-helmet';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import './global.css';
import styles from './layout.module.css';


export default ({ children }) => {

    return (
        <div>
            <Helmet
                title="Title"
                meta={[
                    { name: 'description', content: 'Description' },
                    { name: 'keywords', content: 'keywords' },
                ]}
            />
            <Header/>
            <div className={styles.main}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};
