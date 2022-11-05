import React from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <div className={styles.headerWrapper}>

                     <nav className={styles.nav}>
                        <Link to="/" className={styles.link}>Home</Link>
                        <Link to="/catalog" className={styles.link}>Shop</Link>
                        <Link to="/about" className={styles.link}>About</Link>
                        <Link to="/contact" className={styles.link}>Contact</Link>
                    </nav>

                    <div className={styles.icons}>
                        <Link to='/profile' className={styles.icon}>
                            <img src='/images/profile.png' alt="" className={styles.icon} />
                        </Link>   

                        <button className={styles.icon} > 
                            <img src="/images/search.png" alt=""  className={styles.icon}/>
                        </button>

                        <button className={styles.icon} > 
                            <img src="/images/favorite.png" alt=""  className={styles.icon}/>
                        </button>

                        <button className={styles.icon} > 
                            <img src="/images/basket.png" alt=""  className={styles.icon}/>
                        </button>
                        
                    </div>
            </div>
            
        </header>
    );
};

export default Header;