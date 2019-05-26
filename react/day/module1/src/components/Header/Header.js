import React from 'react';
import injectSheet from 'react-jss';
import styles from "./Header.module.css";



const inline = {
    logo: {
        backgroundColor: '#A55011',
        padding: 20,
        fontSize: 40,
        color: '#4a2',
    },
};

const Header = ({
    classes,
    title
}) => (
        <header className={styles.header}>
            <span className={classes.logo}> {title} </span>{' '}
        </header>
    );

const StyledElement = (() => injectSheet(inline)(Header))();
// const StyledHeader = StyledElement();

export default StyledElement;
