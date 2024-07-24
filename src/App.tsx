import { RouterProvider } from "react-router-dom";

import router from "services/react_router";

import "styles/base.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
