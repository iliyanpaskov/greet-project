import React from 'react';
import { useAppSelector } from '../../Redux/hooks';
import { getAll } from '../../Redux/Products/ProductsSlice';
import { IProduct } from '../../Interfaces/interfaces';
import './Header.scss';
import { CHeagerImage } from '../common/CHeagerImage/CHeagerImage';

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {

    const products = useAppSelector(getAll);
    const firstFiveImages = products.slice(0, 5);
    console.log(firstFiveImages);


    return (
        <header>
            <section className='image__wrapper'>
                {
                    firstFiveImages.map((x: IProduct) => <CHeagerImage key={x.images[0].srcset} imageUrl={x.images[0].src} altText={x.images[0].alt} />)
                }
                <h1>Музика</h1>
            </section>
           
        </header>
    )
}
