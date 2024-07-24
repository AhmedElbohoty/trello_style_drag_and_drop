import { Route, Routes } from "react-router-dom";

import HomePage from "pages/HomePage/HomePage";

function AppPage() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default AppPage;
