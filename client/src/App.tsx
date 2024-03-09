import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/home/Home";
import MobileDetails from "./components/home/MobileDetails";
import MainLayout from "./layout/Layout";

function App() {
  return (
    <MainLayout>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile/details/:id" element={<MobileDetails />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
