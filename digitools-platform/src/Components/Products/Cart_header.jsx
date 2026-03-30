import React, { useState } from 'react';

const Cart_header = () => {
    const [btn, setBtn] = useState('products');
    return (
        <>?
        <section className='container mx-auto mt-30'>
            <div className='text-center space-y-4'>
                <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</p>
                <div className='shadow-md inline-block p-1 rounded-full'>
                    <button onClick={() => setBtn('products')} className={`${btn === 'products' ? 'bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-white' : ''} text-black py-2 px-5 font-bold rounded-full`}>Products</button>
                    <button onClick={() => setBtn('cart')} className={`${btn === 'cart' ? 'bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-white' : 'text-black'} text-black font-bold py-2 px-8 rounded-full`}>Cart (0)</button>
                </div>
            </div>
        </section>
        </>
    );
};

export default Cart_header;