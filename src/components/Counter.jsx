export default function Counter({ value, onUpdate }) {
  return <button onClick={onUpdate}>{value}</button>;
}
