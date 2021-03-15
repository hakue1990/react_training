import styles from './Header.module.scss';
import React from 'react';
import HeaderNavigation from './HeaderNavigation';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>LH.pl</div>
            <HeaderNavigation />
        </div>
    );
}

export default Header;