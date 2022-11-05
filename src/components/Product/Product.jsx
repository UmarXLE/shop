import React from 'react';
import styles from './product.module.css'

const Product = (props) => {
    return (
        <div className={styles.productItem}>
           <div className={styles.imgWrapper}>
                 <img className={styles.img} src="/images/info.png" alt="" />
            </div> 
            <p className={styles.description}>Trenton modular sofa_3</p>
            <h2 className={styles.price}>Rs. 25,000.00</h2>
        </div>
    );
};

export default Product;