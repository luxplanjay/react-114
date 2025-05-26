import TaskList from "../TaskList/TaskList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import TaskForm from "../TaskForm/TaskForm";

import { useEffect } from "react";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/tasksOps";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks())
      .unwrap()
      .then(() => console.log("Success!!!!"))
      .catch(() => console.log("ERROR!!!"));
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>HTTP requests with Redux</h1>
      <TaskForm />
      {loading && <Loader>Loading tasks, please wait...</Loader>}
      {error && <Error>Error message</Error>}
      <TaskList />
    </div>
  );
}
