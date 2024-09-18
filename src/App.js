import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Page/Home';
import ProductInfo from './components/Page/ProductInfo';
import Contact from './components/Page/Contact';
import Admin from './components/Admin/Admin';
import SellerTask from './components/Admin/Seller/Seller';
import OwnerTask from './components/Admin/Owner/Owner';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path = '/' Component = {Home}/>
          <Route exact path = '/product' Component = {ProductInfo}/>
          <Route exact path = '/contact' Component = {Contact}/>
          <Route exact path = '/admin' Component = {Admin}/>

          <Route exact path = '/admin/seller' Component = {SellerTask}/>
          <Route exact path = '/admin/owner' Component = {OwnerTask}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
