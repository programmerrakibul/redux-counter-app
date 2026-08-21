import { CounterPage } from "@/components/counter/counter-page";
import store from "@/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <CounterPage />
    </Provider>
  );
}

export default App;
