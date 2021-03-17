import styles from './Header.module.scss';
import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import Button from '../Button/Button'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>LH.pl</div>
            <HeaderNavigation />
            <Button children='add new item' />
        </header>
    );
}

export default Header;