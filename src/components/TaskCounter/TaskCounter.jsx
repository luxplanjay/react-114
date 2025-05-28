import { useSelector } from "react-redux";
import { selectTaskCount } from "../../redux/tasksSlice";

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  return (
    <div>
      <span>Total: {count.total}</span> | <span>Active: {count.active}</span> |{" "}
      <span>Completed: {count.completed}</span>
    </div>
  );
};
