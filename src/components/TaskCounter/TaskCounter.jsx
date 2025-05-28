import { useSelector } from "react-redux";

export const TaskCounter = () => {
  const tasks = useSelector((state) => state.tasks.items);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <span>Active: {count.active}</span> |{" "}
      <span>Completed: {count.completed}</span>
    </div>
  );
};
