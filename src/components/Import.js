import React from 'react';
import styles from "./Import.module.css"

const Import = ({data, clickHandler, changeHandler}) => {



    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <label>Title:</label>
                <input name="title" type="text" value={data.title} onChange={changeHandler} />
            </div>
            <div className={styles.input}>
                <label>Author:</label>
                <input name="author" type="text" value={data.author} onChange={changeHandler} />
            </div>
            <div className={styles.input}>
                <label>Number #:</label>
                <input name="number" type="text" value={data.number} onChange={changeHandler} />
            </div>
            <div className={styles.btncontainer}>
                <button onClick={clickHandler} className={styles.subbtn} type='submit'>Add Book</button>
            </div>
        </div>
    );
};

export default Import;