import logo from './logo.svg';
import './App.css';
import React from 'react';
//import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import pages
import Home from './pages/home';
import ProductDetails from './pages/product-details';
import Login from './pages/login';
import Register from './pages/register';
//import components
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import ProductPage from './pages/product-page';
import Checkout from './pages/checkout';


const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />          
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/shop-now' element={<ProductPage/>} />
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <Sidebar />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
