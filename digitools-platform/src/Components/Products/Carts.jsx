import React, { use } from 'react';
import Prod_des from './Prod_des';
const Carts = ({ cart }) => {
    const { name, description, price, period, tag, tagType, features, icon } = cart;
    const tagStyle = 
    tagType === 'popular'? 'badge-primary badge-soft bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'
    : tagType === 'new'? 'text-[#0A883E] bg-green-100'
    : tagType === 'best-seller'? 'text-[#BB4D00] bg-yellow-100': '';
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-md">
                <div className="card-body relative">
                    <span className={`badge ${tagStyle} badge-xs text-[14px] px-3 py-2 absolute right-5`}>{tag}</span>
                    <div className="mt-6 border border-base-300 rounded-full flex items-center justify-center w-14 h-14">
                        <img className='object-contain' src={icon} alt="" />
                    </div>
                    <div className="mt-2 space-y-4">
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className='text-[#627382]'>{description}</p>
                    </div>
                        <h3> <span className='text-2xl font-semibold'>${price}</span> <span className='text-[#627382]'>/{period}</span></h3>
                    <div>
                    </div>
                    {
                        features.map((feature, index) => <Prod_des key={index} feature={feature}></Prod_des>)
                    }
                    <div className="">
                        <button className="btn bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-white rounded-full btn-block py-6">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carts;