import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './contexts/product-context';
//sidebar provider
import SidebarProvider from './contexts/sidebar-context';
// cart provider
import CartProvider from './contexts/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <SidebarProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </SidebarProvider>
  </CartProvider>



);


