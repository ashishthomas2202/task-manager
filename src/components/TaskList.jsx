import { useState } from "react";
import styles from "./TaskList.module.css";
import Task from "./Task";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      name: "Workout",
      order: "2",
      done: false,
    },
    { id: "2", name: "Project", order: "3", done: false },
    { id: "3", name: "Breakfast", order: "1", done: false },
  ]);

  const handleClick = (e) => {
    let id = e.currentTarget.getAttribute("data-id");

    let currentTask;
    let rest = [];

    tasks.forEach((task) => {
      if (task.id == id) {
        currentTask = task;
      } else {
        rest.push(task);
      }
    });
    // let currentTask = tasks.filter(task=> task.id == id)
    // let newState = tasks.filter((task) => task.id != id);

    setTasks([...rest, { ...currentTask, done: !currentTask.done }]);
  };
  const sortedTasks = tasks.sort((a, b) => a.order - b.order);

  const taskList = sortedTasks.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      name={task.name}
      onClick={handleClick}
      done={task.done}
    />
  ));

  return (
    <article className={styles.taskList}>
      <h3>Tasks</h3>
      <main>{taskList}</main>
    </article>
  );
}
