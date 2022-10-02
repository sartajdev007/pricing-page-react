import React from 'react';
import Features from './Features/Features';


const PriceOption = ({ priceOption }) => {
    const { features } = priceOption
    return (
        <div className='bg-indigo-500 m-5 p-5  rounded-md'>
            <div>
                <h2>
                    <span className='text-4xl font-bold text-white'>{priceOption.price}</span>
                    <span className='text-2xl text-gray-300'>/mon</span>
                </h2>
                <p className='text-3xl my-4 text-white'>{priceOption.name}</p>
            </div>
            {
                features.map((feature, idx) => <Features
                    key={idx}
                    feature={feature}
                ></Features>)
            }
            <button className='bg-green-500 font-bold w-full px-12 py-2 mt-3 rounded-md text-red-700'>Buy Now</button>
        </div>
    );
};

export default PriceOption;