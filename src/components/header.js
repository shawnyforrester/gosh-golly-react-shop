import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/sidebar-context';
import { IoIosCart } from 'react-icons/io';
import { CartContext } from '../contexts/cart-context';
// import link
import { Link } from 'react-router-dom';
// import logo




const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });


  return (
    <header
      className={`${isActive ? 'bg-rose-100 py-4 shadow-md' : 'bg-rose-100 py-6'
        } fixed w-full z-10 transition-all`}
    >
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* logo */}
        <Link to={'/'}>
          <div className='text-decoration: font-semibold '>
            Gosh Golly
            <img className='w-[50px]' />
          </div>
        </Link>
        <Link to={'register'}>
          <div className ='flex absolute top-6 right-center font-semibold'>
            Sign Up
          </div>
        </Link>
        <Link to={'login'}>
          <div className ='flex absolute top-6 right font-semibold'>
            Login
          </div>
        </Link>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex relative'
        >
          < IoIosCart className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>        
      </div>
    </header>
  );
};

export default Header;
