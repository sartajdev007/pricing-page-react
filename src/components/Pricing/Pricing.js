import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Awesome featueres',
                'Best support',
                'All font packages',
                'Email package',
                '33+ Icon packages',
            ]
        },
        {
            id: 2, name: 'Savings', price: 9.99, features: [
                'Awesome featueres',
                'Best support',
                'All font packages',
                'Email package',
                '33+ Icon packages',
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'Awesome featueres',
                'Best support',
                'All font packages',
                'Email package',
                '33+ Icon packages',
            ]
        },
    ]

    return (
        <div>
            <h2 className='text-3xl font-bold bg-indigo-300 p-10 text-white'>Best price in town</h2>
            <div className='grid md:grid-cols-3 gap-4 mt-4'>
                {
                    pricingOptions.map(pricingOption => <PriceOption
                        key={pricingOption.id}
                        priceOption={pricingOption}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;