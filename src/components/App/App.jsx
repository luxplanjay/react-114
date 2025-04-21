import { useState } from 'react';
import Counter from '../Counter';
import Accordion from '../Accordion';
import css from './App.module.css';

const items = [
  { title: 'Section 1', content: 'This is the content of section 1.' },
  { title: 'Section 2', content: 'This is the content of section 2.' },
  { title: 'Section 3', content: 'This is the content of section 3.' },
];

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [taskCount, setTaskCount] = useState({
    work: 0,
    hobby: 0,
    edu: 0,
  });

  const totalTasks = taskCount.work + taskCount.hobby + taskCount.edu;

  const updateTaskCount = (taskType) => {
    setTaskCount({
      ...taskCount,
      [taskType]: taskCount[taskType] + 1,
    });
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const toggleText = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.container}>
      <Counter value={clicks} onUpdate={handleClick} />
      <Counter value={clicks} onUpdate={handleClick} />
      <Counter value={clicks} onUpdate={handleClick} />
      <hr />
      <button onClick={toggleText}>{isOpen ? 'Hide' : 'Show'}</button>
      {isOpen && <p>🎉 Now you can see me!</p>}
      <hr />
      <Accordion tabs={items} />
      <hr />
      <p>Total tasks: {totalTasks}</p>
      <button onClick={() => updateTaskCount('work')}>
        Work {taskCount.work}
      </button>
      <button onClick={() => updateTaskCount('hobby')}>
        Hobby {taskCount.hobby}
      </button>
      <button onClick={() => updateTaskCount('edu')}>
        Education {taskCount.edu}
      </button>
    </div>
  );
}
