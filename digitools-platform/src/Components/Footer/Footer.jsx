import React from 'react';
import facebook from '../../assets/Facebook.png'
import instagram from '../../assets/Instagram.png'
import twitter from '../../assets/Twitter.png'
const Footer = () => {
    return (
        <div className='bg-[#101727] text-white'>
            <div className='container mx-auto py-20 flex flex-wrap justify-center'>
                <div className='flex flex-col space-y-4 pb-10 xl:pb-0 text-center xl:text-start mr-0 xl:mr-20'>
                    <h1 className='font-bold text-4xl'>DigiTools</h1>
                    <p className='max-w-90 text-[#c5d0d9] '>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10  md:gap-20 text-center xl:text-start'>
                    <div className='space-y-4 text-[#c5d0d9]'>
                        <h1 className='text-xl text-white'>Product</h1>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Templates</p>
                        <p>Integrations</p>
                    </div>
                    <div className='space-y-4 text-[#c5d0d9]'>
                        <h1 className='text-xl text-white'>Company</h1>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Press</p>
                    </div>
                    <div className='space-y-4 text-[#c5d0d9]'>
                        <h1 className='text-xl text-white'>Resources</h1>
                        <p>Documentation</p>
                        <p>Help Center</p>
                        <p>Community</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <h1 className='text-xl text-white pb-2'>Social Links</h1>
                        <div className='flex gap-4'>
                            <a href=""><img className='w-8' src={facebook} alt="" /></a>
                            <a href=""><img className='w-8' src={instagram} alt="" /></a>
                            <a href=""><img className='w-8' src={twitter} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto pb-5'>
                <hr className='h-px border-0 bg-gray-400' />
                <div className='flex flex-col xl:flex-row justify-center xl:justify-between text-center text-[#cdc6c6ca] pt-10'>
                    <p>© 2026 Digitools. All rights reserved.</p>   
                    <div className='flex gap-5 justify-center text-[#cdc6c6ca]'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;