import { increment } from "@/redux/counter-slice";
import { useDispatch } from "react-redux";
import { CounterButton } from "./counter-button";

const IncrementButton = () => {
  const dispatch = useDispatch();

  console.log("IncrementButton");

  return (
    <>
      <CounterButton
        label="Increase count"
        symbol="+"
        onClick={() => dispatch(increment())}
      />
    </>
  );
};

export default IncrementButton;
