import Distance from "./components/Pages/Distance";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./NavBar/NavBar";
import ShippingData from "./components/Pages/ShippingData";
import Home from "./components/Pages/Home";
import GAutocomplete from "./components/Pages/GAutocomplete";
import Footer from "./Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer autoClose={1000}/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/distance-calculator" element={<Distance />} />
        <Route exact path="/shipper-data" element={<ShippingData />} />
        <Route exact path="/g-complete" element={<GAutocomplete />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
