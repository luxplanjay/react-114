import { useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';
// import OrderForm from '../OrderForm/OrderForm';
import TextInput from '../TextInput/TextInput';
import css from './App.module.css';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

const initialNames = [
  'Liam',
  'Olivia',
  'Noah',
  'Emma',
  'Oliver',
  'Ava',
  'Elijah',
  'Sophia',
  'James',
  'Isabella',
  'William',
  'Mia',
  'Benjamin',
  'Charlotte',
  'Lucas',
  'Amelia',
  'Henry',
  'Harper',
  'Alexander',
  'Evelyn',
];

export default function App() {
  const [names, setNames] = useState(initialNames);
  const [inputValue, setInputValue] = useState('');
  const [debouncedInputValue] = useDebounce(inputValue, 300);

  // const [lang, setLang] = useState('en');

  // const [orders, setOrders] = useState([]);

  // const addNewOrder = (newOrder) => {
  //   setOrders((prevOrders) => {
  //     return [...prevOrders, newOrder];
  //   });
  // };

  // useEffect(() => {
  //   console.log('Make HTTP request: ', debouncedInputValue);
  // }, [debouncedInputValue]);

  const visibleNames = useMemo(() => {
    return names.filter((name) =>
      name.toLowerCase().includes(debouncedInputValue.toLowerCase())
    );
  }, [debouncedInputValue, names]);

  return (
    <div className={css.container}>
      <TextInput text={inputValue} onChange={setInputValue} />
      <p>Actual value: {inputValue}</p>
      <p>Debounce value: {debouncedInputValue}</p>

      <ul>
        {visibleNames.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>

      {/* <LangSwitcher value={lang} onChange={setLang} /> */}
      {/* <p>Current lang: {lang}</p> */}

      {/* <OrderForm onSubmit={addNewOrder} /> */}

      {/* <pre>{JSON.stringify(orders, null, 2)}</pre> */}
    </div>
  );
}
