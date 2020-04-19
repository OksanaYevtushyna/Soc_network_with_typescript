import React from 'react';
import styles from './Header.module.css';



const Header = () => {
    return (
        <div className={styles.header}>
            <header className={styles.header_content}>
                <img src='https://i.pinimg.com/originals/0b/43/22/0b4322fbc3aebd0e50e03c386be2967d.jpg' alt="logo" srcset="" className={styles.logo} />
                <div className={styles.header_container}>
                    <input type="text" placeholder='     Search' className={styles.search} />
                    <button className={styles.logout}>Log out</button>
                </div>
            </header>
            <div className={styles.header_image}>
                <img src="https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg" alt="" />
                <button>CHANGE IMAGE</button>
            </div>
        </div>
    )
}

export default Header