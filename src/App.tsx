import Button from "./components/button";
import { useCountStore } from "./stores/count";

export default function App() {
  const { count, increment, decrement } = useCountStore((state) => ({
    ...state,
  }));

  return (
    <>
      <Button onClick={() => decrement(2)}>-</Button>
      <h1>Count {count}</h1>
      <Button onClick={() => increment(2)}>+</Button>
      <h1>Power {count * count}</h1>
    </>
  );
}
