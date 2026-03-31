import React from 'react';
const Show_added_prod = ({prod, setSelectedProd, selectedProd}) => {
    const handleDelete = (prod) => {
        console.log('delete clicked');
        const updateCart = selectedProd.filter(item => item.name != prod.name)
        setSelectedProd(updateCart);
    }
    // console.log(selectedProd);
    const { name, price, icon } = prod;
    return (
        <div>
            <div className='bg-base-200 rounded-xl p-2'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=' border border-base-300 bg-white rounded-full flex items-center justify-center w-14 h-14'>
                        <img src={icon} alt="" />
                    </div>
                    <div className='flex justify-between w-full'>
                        <div>
                            <h1 className='text-[#101727] text-[20px]'>{name}</h1>
                            <p className='text-[#627382]'>$2{price}</p>
                        </div>
                        <button className='text-red-500 pr-3' onClick={() => handleDelete(prod)}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show_added_prod;