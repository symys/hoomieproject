import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About"
// import Footer from './components/Footer';
// import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
// import Navbar from './components/Navbar';
import Newnav from './components/Newnav';
import Product from "./components/Product"
import Products from "./components/Products"
import Profile from "./components/Profile"
import Services from "./components/Services"
import AllProducts from './components/AllProducts';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import ThankYouPage from './components/ThankYouPage';
import CartPage from './components/CartPage';

function App() {
  return (
    <BrowserRouter>
    <Newnav/>
    <Routes>
      <Route exact path="/" element={<LandingPage/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/product" element={<Product/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/services" element={<Services/>}/>
      <Route exact path="/allproducts" element={<AllProducts/>}/>
      <Route exact path='/login' element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/thankyou' element={<ThankYouPage/>} />
      <Route path='/cart' element={<CartPage />} />
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
