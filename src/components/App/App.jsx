import cats from '../../cats.json';
import AppBar from '../AppBar/AppBar';
import CatList from '../CatList/CatList';
import css from './App.module.css';
import AlertBox from '../AlertBox/AlertBox';

// import CloudIcon from '../../assets/cloud-bolt.svg';

export default function App() {
  return (
    <div className={css.container}>
      <AppBar />

      <AlertBox text="Default 123" />
      <AlertBox type="success" text="Success qweqwe" />
      <AlertBox type="error" text="Error wrgh3hteth" />

      <CatList items={cats} />
    </div>
  );
}
