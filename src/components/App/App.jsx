import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../TaskList/TaskList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import TaskForm from "../TaskForm/TaskForm";
import { fetchTasks } from "../../redux/tasksOps";
import css from "./App.module.css";
import { TaskCounter } from "../TaskCounter/TaskCounter";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <TaskCounter />
      <TaskForm />
      {loading && <Loader>Loading tasks, please wait...</Loader>}
      {error && <Error>Error message</Error>}
      <TaskList />
    </div>
  );
}
