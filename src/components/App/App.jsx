import { useState } from 'react';
import OrderForm from '../OrderForm/OrderForm';
import css from './App.module.css';

export default function App() {
  const [orders, setOrders] = useState([]);

  const addNewOrder = (newOrder) => {
    setOrders((prevOrders) => {
      return [...prevOrders, newOrder];
    });
  };

  return (
    <div className={css.container}>
      <OrderForm onSubmit={addNewOrder} />

      <pre>{JSON.stringify(orders, null, 2)}</pre>
    </div>
  );
}
