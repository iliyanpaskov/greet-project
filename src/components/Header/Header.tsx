import React from 'react';
import { useAppSelector } from '../../Redux/hooks';
import { getAll } from '../../Redux/Products/ProductsSlice';
import { IProduct } from '../../Interfaces/interfaces';
import { CHeagerImage } from '../common/CHeagerImage/CHeagerImage';
import './Header.scss';

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {

    const products = useAppSelector(getAll);
    const headerImages = products.slice(4, 9);

    return (
        <header>
            <section className='image__wrapper'>
                {
                    headerImages.map((x: IProduct) => <CHeagerImage key={x.images[0].srcset} imageUrl={x.images[0].src} altText={x.images[0].alt} />)
                }
                <h1>Музика</h1>
            </section>
        </header>
    )
}
