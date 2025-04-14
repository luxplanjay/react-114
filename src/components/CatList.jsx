import CatProfile from './CatProfile';

export default function CatList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <CatProfile info={item} />
        </li>
      ))}
    </ul>
  );
}
