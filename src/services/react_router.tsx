import { createBrowserRouter } from "react-router-dom";

import AppPage from "pages/AppPage";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  { path: "*", element: <AppPage /> },
]);

export default router;
