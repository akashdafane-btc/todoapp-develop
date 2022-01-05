import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./router";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
