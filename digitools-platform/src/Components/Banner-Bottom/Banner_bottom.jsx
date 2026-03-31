import React from 'react';

const Banner_bottom = () => {
    return (
        <div className='bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-center mt-21'>
            <div className='pt-25 space-y-4'>
                <h1 className='font-bold text-5xl text-white'>Ready to Transform Your Workflow?</h1>
                <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter <br />Start your free trial today</p>
            </div>
            <div className='flex justify-center gap-5 mt-10'>
                <button className='bg-white font-[600] px-3 py-3 rounded-full hover:-translate-y-1 transition-all cursor-pointer'><span className='bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span></button>
                <button className='border font-[600] px-6 rounded-full text-white hover:-translate-y-1 transition-all cursor-pointer'>View Pricing</button>
            </div>
            <p className='text-white pt-4 pb-10'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Banner_bottom;