import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import ContactUs from './ContactUs/ContactUs';
import Products from './Products/Products';
import About from './About/About';
import Whyus from './WhyUs/Whyus';
import ProductDetail from './Products/ProductDetail/ProductDetail';
import Laboratory from './Laboratory/Laboratory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Dashboard />}>
          <Route index element={<Dashboard />}></Route>
        </Route>
        <Route path="about" element={<About />} ></Route>
        <Route path="contact" element={<ContactUs />} ></Route>
        <Route path="products" >
          <Route index element={<Products />}></Route>
          <Route path=':name' element={<ProductDetail />}></Route>
        </Route>
        <Route path="whyus" element={<Whyus />} ></Route>
        <Route path="laboratory&manufacturing" element={<Laboratory />} ></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
