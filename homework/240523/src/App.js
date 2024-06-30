import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import MainPage from "./pages/MainPage";
import CounterPage from "./pages/CounterPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/todo-list" element={<TodoPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
