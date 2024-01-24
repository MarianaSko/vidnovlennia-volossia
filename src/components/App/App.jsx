import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../../pages/HomePage/HomePage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import Layout from "../Layout/Layout";
import Studio from "../Studio/Studio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
