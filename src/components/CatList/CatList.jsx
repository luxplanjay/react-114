import CatProfile from '../CatProfile';
import css from './CatList.module.css';

export default function CatList({ items }) {
  return (
    <ul className={css.container}>
      {items.map((item) => (
        <li key={item.id}>
          <CatProfile info={item} />
        </li>
      ))}
    </ul>
  );
}
