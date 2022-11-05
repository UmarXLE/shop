import React from 'react';
import styles from './infoItem.module.css'

const InfoItem = (props) => {
    return (

        <div className={styles.InfoItem}> 
            <h2>{props.title}</h2>
            <p>{props.descr}</p>
        </div>

    );
};

export default InfoItem;