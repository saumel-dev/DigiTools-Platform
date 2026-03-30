import React from 'react';
import bedge from '../../assets/bedge.png';
import bannerImg from '../../assets/banner.png'
import play from '../../assets/play.png'
const Banner = () => {
    return (
        <section className='container mx-auto'>
            <div className=' flex flex-col lg:flex-row justify-between lg:mt-30 text-center  lg:text-start '>
                <div className='left-section mt-30 space-y-4'>
                    <div className="inline-block">
                        <div className='bg-[#E1E7FF] rounded-full font-bold px-4 py-2 flex flex-row items-center gap-2'>
                            <img className='h-3.5 -mt-0.5' src={bedge} alt="" />
                            <p className='bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                        </div>
                    </div>
                    <h1 className='text-7xl font-bold'>Supercharge Your <br/> <span className='bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Digital Workflow</span></h1>
                    <p className='lg:max-w-125 text-[#627382]'>Access premium AI tools, design assets, templates, and productivity
                        software all in one place. Start creating faster today.
                    </p>
                    <div className='flex gap-5 justify-center lg:justify-start'>
                        <button className='btn rounded-full text-white bg-linear-to-b from-[#4F39F6] to-[#9514FA]'>Explore Products</button>
                        <button className='btn rounded-full bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-purple-600 border-2'><img src={play} alt="" />Watch Demo</button>
                    </div>
                </div>
                <div className='right-section flex justify-center lg:justify-end mt-5 lg:mt-0'>
                    <img  src={bannerImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;