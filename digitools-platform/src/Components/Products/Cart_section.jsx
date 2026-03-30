import React from 'react';
import design from '../../assets/products/design-tool.png'
const Cart_section = () => {
    return (
        <div className='container mx-auto bg-base-200 rounded-xl mt-10 px-10'>
            <h1 className='text-[#101727] bold text-2xl py-5'>Your Cart</h1>
            <div className='space-y-5'>
                <div className='border rounded-xl p-2'>
                    <div className='flex justify-center items-center'>
                        <div>
                            <img src={design} alt="" />
                        </div>
                        <div className='flex justify-between border w-full'>
                            <div>
                                <h1 className='font-semibold text-[#101727] text-[20px]'>Ai writing pro</h1>
                                <p className='text-[#627382]'>$29</p>
                            </div>
                            <button className='text-red-500'>Remove</button>
                        </div>
                    </div>
                </div>
                <div className='border'>
                    <div className='flex'>
                        <div>
                            <img src={design} alt="" />
                        </div>
                        <div className='flex justify-between border w-full'>
                            <div>
                                <h1>Ai writing pro</h1>
                                <p>$29</p>
                            </div>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart_section;