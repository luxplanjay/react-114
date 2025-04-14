import cats from '../cats.json';
import AppBar from './AppBar';
import CatList from './CatList';

export default function App() {
  return (
    <>
      <AppBar />
      <CatList items={cats} />
    </>
  );
}
