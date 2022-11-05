import React from 'react';
import styles from './filter.module.css'

const Filter = () => {
    return (
        <div className={styles.wrapper} >

            <div className={styles.leftSide}>

                <button className={styles.setting}>
                    <img src='/images/filter-icon1.png' alt="" />
                    <p>Filter</p>
                </button>

                <button className={styles.dots}></button>

                <button className={styles.list}></button>


                <span></span>

                <p>Showing 1–16 of 32 results</p>

            </div>


            <div className={styles.rightSide}>

                <div className={styles.amount}>
                    <h2>Show</h2>
                    <input 
                    placeholder='16'
                    type="number" />
                </div>


                <div className={styles.category}>
                    <h2>Short by</h2>
                    <input 
                    placeholder='Default'
                    type="text" name="" id="" />
                </div>

            </div>
            
        </div>
    );
};

export default Filter;