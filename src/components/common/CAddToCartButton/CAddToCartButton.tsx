import React from 'react';
import { BiCartAdd } from 'react-icons/bi';
import './CAddToCartButton.scss';

interface CAddToCartButtonProps { }

export const CAddToCartButton: React.FC<CAddToCartButtonProps> = () => {
    return (
        <div className='button__wrapper'>
            <a href="https://greet.bg/?add-to-cart=5589">добави <BiCartAdd /> </a>
        </div>
    )
}
