import React from "react";
import styles from "./Task.module.css";
import { FaPlus } from "react-icons/fa";
export default function Task({ id, name, onClick = () => {}, done = false }) {
  return (
    <article className={styles.task} onClick={onClick} {...{ "data-id": id }}>
      <div className={styles.checkbox}>{done && <FaPlus />}</div>
      <p className={done ? styles.checked : ""}>{name}</p>
    </article>
  );
}
