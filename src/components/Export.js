import React from 'react';
import styles from "./Export.module.css";
import { BsTrash } from "react-icons/bs";

const Export = () => {
    return (
        <div className={styles.container}>
            <table>
                <thead>
                    <tr>
                        <th>Remove</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Number#</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><BsTrash /></td>
                        <td>hadi</td>
                        <td>last dance</td>
                        <td>01</td>
                    </tr>
                </tbody>
            </table>
            <button>Remove All</button>
        </div>
    );
};

export default Export;