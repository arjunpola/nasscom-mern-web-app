import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addProduct" element={<AddProductPage />} />
    </Routes>
  );
}

export default App;
