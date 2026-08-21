import { decrement } from "@/redux/counter-slice";
import { useDispatch } from "react-redux";
import { CounterButton } from "./counter-button";

const DecrementButton = () => {
  const dispatch = useDispatch();

  console.log("DecrementButton");

  return (
    <>
      <CounterButton
        label="Increase count"
        symbol="-"
        onClick={() => dispatch(decrement())}
      />
    </>
  );
};

export default DecrementButton;
