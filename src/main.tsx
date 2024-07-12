import ReactDOM from "react-dom/client";

// App Component
import App from "./App.tsx";

// Redux
import { Provider } from "react-redux";
import store from "./redux/configureStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
