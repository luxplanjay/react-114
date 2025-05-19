import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw } from "../redux/balanceSlice";
import { useState } from "react";

export default function Balance() {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);

  const handleDeposit = () => {
    dispatch(deposit(value));
  };

  const handleWithdraw = () => {
    dispatch(withdraw(value));
  };

  const handleChangeValue = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <div>
      <p>Balance: {balance} credits</p>
      <input type="number" value={value} onChange={handleChangeValue} />
      <button onClick={handleDeposit}>Deposit credits</button>
      <button onClick={handleWithdraw}>Withdraw credits</button>
    </div>
  );
}
