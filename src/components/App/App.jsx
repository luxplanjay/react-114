// import RefBasics from '../RefBasics';
// import Player from '../Player';
// import Timer from '../Timer';
import { use } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import LangMessage from '../LangMessage';
import css from './App.module.css';
import { ThemeContext } from '../../contexts/contexts';

export default function App() {
  const { theme } = use(ThemeContext);
  return (
    <div className={css.container}>
      <p>Current theme: {theme}</p>
      {/* <RefBasics /> */}
      {/* <Player /> */}
      {/* <Timer /> */}
      <AppHeader />
      <LangMessage />
    </div>
  );
}
