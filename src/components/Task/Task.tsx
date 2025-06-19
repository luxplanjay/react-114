import { deleteTask } from "../../redux/tasks/operations";
import { useAppDispatch } from "../../hooks/redux";
import css from "./Task.module.css";

interface Props {
  id: string;
  text: string;
}

export const Task = ({ id, text }: Props) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
