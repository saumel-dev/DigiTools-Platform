import React from 'react';
import Empty_cart from '../../assets/products/empty_cart.png'
import Show_added_prod from './Show_added_prod';
const Cart_section = ({ setSelectedProd, selectedProd }) => {
    return (
        <>
            {
                selectedProd.length === 0 ? <div className='container flex flex-col justify-center items-center mx-auto shadow-sm rounded-xl mt-10 h-100'>
                    <img className='w-[350px]' src={Empty_cart} alt="" />
                    <h1 className='text-4xl text-center text-gray-400'>Your cart is empty</h1>
                </div>
                    : <div className='container mx-auto shadow-sm rounded-xl mt-10 px-10'>
                        <h1 className='text-[#101727] bold text-2xl py-5'>Your Cart</h1>
                        <div className='space-y-5'>
                            {
                                selectedProd.map((prod, index) => <Show_added_prod key={index} setSelectedProd={setSelectedProd} selectedProd={selectedProd} prod={prod}></Show_added_prod>)
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default Cart_section;