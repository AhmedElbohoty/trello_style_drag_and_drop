import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import router from "services/react_router";
import store from "store/store";

import "styles/base.css";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
