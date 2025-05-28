import { useId } from "react";
import { useDebouncedCallback } from "use-debounce";
import css from "./TextFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTextFilter, selectTextFilter } from "../../redux/filtersSlice";

export default function TextFilter() {
  const id = useId();
  const dispatch = useDispatch();
  const filterValue = useSelector(selectTextFilter);

  const debounced = useDebouncedCallback(
    (value) => dispatch(changeTextFilter(value)),
    300
  );

  return (
    <div className={css.wrapper}>
      <label htmlFor={id}>
        <b>Filter by text</b>
      </label>
      <input
        className={css.field}
        type="text"
        id={id}
        defaultValue={filterValue}
        onChange={(e) => debounced(e.target.value)}
      />
    </div>
  );
}

// export default function TextFilter() {
//   const id = useId();
//   const dispatch = useDispatch();
//   const filterValue = useSelector(selectTextFilter);

//   const [text, setText] = useState(filterValue);
//   const [debouncedText] = useDebounce(text, 300);

//   useEffect(() => {
//     dispatch(changeTextFilter(debouncedText));
//   }, [debouncedText, dispatch]);

//   return (
//     <div className={css.wrapper}>
//       <label htmlFor={id}>
//         <b>Filter by text</b>
//       </label>
//       <input
//         className={css.field}
//         type="text"
//         id={id}
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </div>
//   );
// }
