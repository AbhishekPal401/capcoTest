import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store/configureStore.js";
import Routers from "./routes/index.jsx";
import "./App.css";
import { BrowserRouter } from "react-router";

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
