import React, { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../contexts/cart-context";
import CartItem from '../components/cart-item';
import { Link } from 'react-router-dom';

const Checkout = () => {

    const { cart, clearCart, total } = useContext(CartContext);

    return (
        <div className="grid grid-cols-2 h-[800px] ">
            <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <h1 className="text-base font-semibold leading-7 text-gray-900">Checkout</h1>
                <br />
                <div class="sm:col-span-3">
                    <label for="cardNumber" class="mt-4 block text-sm font-medium leading-6 text-gray-900">Card Number:</label>
                    <div className="mt-2">
                        <input type="text" id="cardNumber" class="mt-4 block w-48 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <br />
                    <label for="expiryDate" class="mt-4 block text-sm font-medium leading-6 text-gray-900">Expiry Date:</label>
                    <input type="text" id="expiryDate" class="mt-4 block w-48 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <br />
                    <label for="cvv" class="mt-4 block text-sm font-medium leading-6 text-gray-900">CVV:</label>
                    <input type="text" id="cvv" class="mt-4 block w-48 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <br />
                    <button type="submit" class=" m-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Pay Now</button>
                    <Link to={`/shop-now`}>
                        <button type="reset" class=" m-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Continue Shopping</button>
                    </Link>

                </div>
            </div>
            <div className='flex flex-col gap-y-2 h-[600px] lg:h-[600px] overflow-y-auto overflow-x-hidden border-b mt-20'>
                {cart.map((item) => {
                    return <CartItem item={item} key={item.id} />;
                })}
            </div>
            <div className="grid justify-items-end">
                <div>
                    {/* total */}
                    <div className='uppercase font-semibold'>
                        <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
                    </div>
                    {/* clear cart icon */}
                    <div
                        onClick={clearCart}
                        className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'
                    >
                        <FiTrash2 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;