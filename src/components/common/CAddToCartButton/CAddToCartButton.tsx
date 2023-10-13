import React from 'react';
import { BiCartAdd } from 'react-icons/bi';
import './CAddToCartButton.scss';

interface CAddToCartButtonProps {
    id:number
}

export const CAddToCartButton: React.FC<CAddToCartButtonProps> = ({
    id
}) => {
    return (
        <div className='button__wrapper'>
            <a href={`https://greet.bg/?add-to-cart=${id}`}>Добави в<BiCartAdd /> </a>
        </div>
    )
}
