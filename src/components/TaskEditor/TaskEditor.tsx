import { addTask } from "../../redux/tasks/operations";
import { useAppDispatch } from "../../hooks/redux";
import css from "./TaskEditor.module.css";

export default function TaskEditor() {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const text = formData.get("text") as string;

    if (text !== "") {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    alert("Task cannot be empty. Enter some text!");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input} />
      <button type="submit" className={css.button}>
        Add task
      </button>
    </form>
  );
}
