import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';


const Features = ({ feature }) => {
    return (
        <div className='flex items-center text-white'>
            <CheckBadgeIcon className='w-5 h-5' />
            <p className='ml-2'>{feature}</p>
        </div>
    );
};

export default Features;