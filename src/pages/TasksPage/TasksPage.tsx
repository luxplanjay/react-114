import { useEffect } from "react";
import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import TaskList from "../../components/TaskList/TaskList";
import TaskEditor from "../../components/TaskEditor/TaskEditor";
import { fetchTasks } from "../../redux/tasks/operations";
import { selectLoading } from "../../redux/tasks/selectors";
import { useAppDispatch } from "../../hooks/redux";

export default function TasksPage() {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your tasks</PageTitle>
      <TaskEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <TaskList />
    </>
  );
}
