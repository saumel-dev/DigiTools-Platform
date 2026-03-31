import React from 'react';
import user from '../../assets/user.png'
import rocket from '../../assets/rocket.png'
import packagee from '../../assets/package.png'
const Get_started = () => {
    return (
        <div className='mx-auto bg-base-200 text-center mt-30'>
            <div className='pt-20'>
                <h1 className='text-5xl font-bold'>Get Started in 3 Steps</h1>
                <p className='pt-4 text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='w-9/12 mx-auto pb-25'>
                <div className='grid xl:grid-cols-3 justify-items-center'>
                    <div className='bg-white hover:-translate-y-3 transition-all w-90 rounded-xl items-center text-center mt-20'>
                        <div className='card-body flex justify-center items-center relative'>
                            <p className='text-white px-2 py-1.5 rounded-full absolute bg-linear-to-b from-[#4F39F6] to-[#9514FA] top-5 right-5'>01</p>
                            <div className='pt-15'>
                                <img className='bg-linear-to-b from-[#4F39F6]/20 to-[#9514FA]/20 w-20 rounded-full p-2' src={user} alt="" />
                            </div>
                            <h3 className='pt-4 font-bold text-2xl'>Create Account</h3>
                            <p className='pt-4 text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className='bg-white hover:-translate-y-1 transition-all w-90 rounded-xl items-center text-center mt-20'>
                        <div className='card-body flex justify-center items-center relative'>
                            <p className='text-white px-2 py-1.5 rounded-full absolute bg-linear-to-b from-[#4F39F6] to-[#9514FA] top-5 right-5'>02</p>
                            <div className='pt-8'>
                                <img className='bg-linear-to-b from-[#4F39F6]/20 to-[#9514FA]/20 w-20 rounded-full p-2' src={packagee} alt="" />
                            </div>
                            <h3 className='pt-4 font-bold text-2xl'>Choose Products</h3>
                            <p className='pt-4 text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                    <div className='bg-white hover:-translate-y-1 transition-all w-90 rounded-xl items-center text-center mt-20'>
                        <div className='card-body flex justify-center items-center relative'>
                            <p className='text-white px-2 py-1.5 rounded-full absolute bg-linear-to-b from-[#4F39F6] to-[#9514FA] top-5 right-5'>03</p>
                            <div className='pt-8'>
                                <img className='bg-linear-to-b from-[#4F39F6]/20 to-[#9514FA]/20 w-20 rounded-full p-2' src={rocket} alt="" />
                            </div>
                            <h3 className='pt-4 font-bold text-2xl'>Start Creating</h3>
                            <p className='pt-4 text-[#627382]'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Get_started;