import React from 'react';
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>List of books</h1>
            <h4>Add your new book to the library</h4>
        </div>
    );
};

export default Header;