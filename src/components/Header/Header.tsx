import React from 'react';
import { useAppSelector } from '../../Redux/hooks';
import { getAllSaved } from '../../Redux/Products/ProductsSlice';
import { IProduct } from '../../Interfaces/interfaces';
import { CHeagerImage } from '../common/CHeagerImage/CHeagerImage';
import './Header.scss';
import { headerCategory } from '../../Redux/Categories/CategoriesSlice';

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {

    const products = useAppSelector(getAllSaved);
    const headerTitle = useAppSelector(headerCategory)[0];
    const headerImages = products.slice(3, 8);

    return (
        <header>
            <section className='image__wrapper'>
                {
                    headerImages.map((x: IProduct) => <CHeagerImage key={x.images[0].srcset} imageUrl={x.images[0].src} altText={x.images[0].alt} />)
                }
                <h1>{headerTitle?.name}</h1>
            </section>
        </header>
    )
}
