import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../redux/localeSlice";

export default function LangSwitcher() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.locale.lang);

  const handleChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <select value={lang} onChange={handleChange}>
      <option value="en">EN</option>
      <option value="uk">UK</option>
      <option value="pl">PL</option>
    </select>
  );
}
