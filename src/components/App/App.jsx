import { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Timer from '../Timer';
import css from './App.module.css';
import axios from 'axios';
import ClickCounter from '../ClickCounter';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const toggleTimer = () => setIsTimerOpen(!isTimerOpen);

  const [character, setCharacter] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.info/api/people/${count}`)
      .then((response) => setCharacter(response.data));
  }, [count]);

  useEffect(() => {
    document.title = character && character.name;
  }, [character]);

  return (
    <div className={css.container}>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>

      <button onClick={toggleSidebar}>Open sidebar</button>
      {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}

      <button onClick={toggleTimer}>Toggle timer</button>
      {isTimerOpen && <Timer />}

      <ClickCounter />

      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div>
  );
}
