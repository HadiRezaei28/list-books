import React from 'react';
import styles from "./Export.module.css";
import { BsTrash } from "react-icons/bs";
import { MdPrivacyTip } from "react-icons/md";

const Export = ({ informations, oneRemove, allRemove }) => {

    return (
        <div className={styles.container}>
            <table>
                <thead>
                    <tr>
                        <th>Remove</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Number #</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        informations.map((information) => {
                            return (
                                <tr key={information.number}>
                                    <td className={styles.remove} onClick={() => oneRemove(information.number)}><BsTrash /></td>
                                    <td>{information.author}</td>
                                    <td>{information.title}</td>
                                    <td>{information.number}</td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>

            {
                informations.length < 1 ?
                    <><span className={styles.svgwarning}>< MdPrivacyTip /></span><p className={styles.warning}>not found any book</p></> :
                    <button className={styles.trashbtn} onClick={() => allRemove()}>Remove All</button>
            }
        </div>
    );
};

export default Export;