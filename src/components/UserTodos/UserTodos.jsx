import css from "./UserTodos.module.css";

export default function UserTodos() {
  const todos = [];

  return (
    <div className={css.container}>
      <h2 className={css.header}>User Todos</h2>
      <ul className={css.list}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? css.completed : css.pending}
          >
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
