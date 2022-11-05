import React from 'react';
import styles from './footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>

            <div className={styles.footerUpInfo}>

                    <div className={styles.decsr}>
                    400 University Drive Suite 200 Coral Gables,
        FL 33134 USA
                    </div>

                    <div className={styles.footerItem}>
                        <h2>Links</h2>
                        <nav>
                             <Link to="/" className={styles.link}>Home</Link>
                            <Link to="/catalog" className={styles.link}>Shop</Link>
                             <Link to="/about" className={styles.link}>About</Link>
                            <Link to="/contact" className={styles.link}>Contact</Link>
                        </nav>
                        
                    </div>

                    <div className={styles.footerItem}>
                        <h2>Help</h2>
                        <nav>
                             <Link to="" className={styles.link}>Payment Options</Link>
                            <Link to="" className={styles.link}>Returns</Link>
                             <Link to="" className={styles.link}>Privacy Policies</Link>
                            {/* <Link to="/contact" className={styles.link}>Contact</Link> */}
                        </nav>
                        
                    </div>


                    <div className={styles.footerForm}>
                        <h2>Newsletter</h2>
                        <form>
                            <input type="text" placeholder='Enter Your Email Address'/>
                            <button>SUBSCRIBE</button>
                        </form>
                    </div>

            </div>



            <div className={styles.footerBottomInfo}>
                <p>2022 Meubel House. All rights reverved</p>
            </div>

           


            

        </footer>
    );
};

export default Footer;