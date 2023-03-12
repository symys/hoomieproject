import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About"
import CardPage from "./components/CardPage"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import Products from "./components/Products"
import Profile from "./components/Profile"
import Services from "./components/Services"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/cardpage" element={<CardPage/>}/>
      <Route exact path="/product" element={<Product/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/services" element={<Services/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
