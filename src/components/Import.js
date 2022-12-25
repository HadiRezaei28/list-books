import React from 'react';
import styles from "./Import.module.css"

const Import = () => {
    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <label>Title:</label>
                <input type="text" />
            </div>
            <div className={styles.input}>
                <label>Author:</label>
                <input type="text" />
            </div>
            <div className={styles.input}>
                <label>Number #:</label>
                <input type="text"></input>
            </div>
            <div className={styles.btncontainer}>
                <button className={styles.subbtn} type='submit'>Add Book</button>
            </div>
        </div>
    );
};

export default Import;