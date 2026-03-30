import React from 'react';

const Stats = () => {
    return (
        <section className='w-full bg-linear-to-b from-[#4F39F6] to-[#9514FA] mt-10'>
            <div className='flex justify-evenly text-white py-9'>
                <div>
                    <div>
                        <h1 className='text-5xl lg:text-6xl'>50K+</h1>
                    </div>
                    <div>
                        <p className='text-center'>Active Users</p>
                    </div>
                </div>
                <p className='h-15 w-[1px] mt-3 bg-white opacity-40'></p>
                <div>
                    <div>
                        <h1 className='text-5xl lg:text-6xl'>200+</h1>
                    </div>
                    <div>
                        <p className='text-center'>Premium Tools</p>
                    </div>
                </div>
                <p className='h-15 w-[1px] mt-3 bg-white opacity-40'></p>
                <div>
                    <div>
                        <h1 className='text-5xl lg:text-6xl'>4.9</h1>
                    </div>
                    <div>
                        <p className='text-center'>Rating</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;