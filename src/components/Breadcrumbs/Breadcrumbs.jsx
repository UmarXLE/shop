import React from 'react';
import styles from './bread.module.css'

const Breadcrumbs = (props) => {
    return (
        <div className={styles.wrapper}>
            <img src="/images/bread-logo.png" alt="" className={styles.icon}/>
            <h1>{props.title}Shop</h1>
            <p className={styles.breadcrumb}>Home &#8594;
Shop</p>
        </div>
    );
};

export default Breadcrumbs;