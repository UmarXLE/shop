import React from 'react';
import InfoItem from '../InfoItem/InfoItem';
import styles from './info.module.css'

const Info = () => {
    const infoData = [
        {
            id:1,
            title:'Free Delivery',
            descr:'For all oders over $50, consectetur adipim scing elit.'
        },
        {
            id:2,
            title:'90 Days Return',
            descr:'If goods have problems, consectetur adipim scing elit.'
        },
        {
            id:3,
            title:'Secure Payment',
            descr:'100% secure payment, consectetur adipim scing elit.'
        }
    ]
    return (
        <div className={styles.infoWrapper}>
            {
                infoData.map(item => {
                    return <InfoItem 
                    title = {item.title}
                    descr = {item.descr}
                     />
                })
            }
        </div>
    );
};

export default Info;