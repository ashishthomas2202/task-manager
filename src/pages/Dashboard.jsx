import React from "react";
import styles from "./Dashboard.module.css";
import TaskList from "../components/TaskList";
export default function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <h1>Dashboard</h1>
      <TaskList />
    </section>
  );
}
