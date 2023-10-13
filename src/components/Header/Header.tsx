import React from 'react';
import { useAppSelector } from '../../Redux/hooks';
import { getAll, isLoaded } from '../../Redux/Products/ProductsSlice';
import { IProduct } from '../../Interfaces/interfaces';
import { CHeagerImage } from '../common/CHeagerImage/CHeagerImage';
import './Header.scss';
import { CLogo } from '../common/CLogo/CLogo';

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {

    const products = useAppSelector(getAll);
    const isLoading = useAppSelector(isLoaded);
    const headerImages = products.slice(4, 9);
    console.log(headerImages);


    return (
        <header>
            <section className='image__wrapper'>
                {
                    !isLoading
                        ? headerImages.map((x: IProduct) => <CHeagerImage key={x.images[0].srcset} imageUrl={x.images[0].src} altText={x.images[0].alt} />)
                        : [...Array(5)].map(x=><CLogo key={Math.random()}/>)
                }
                <h1>Музика</h1>
            </section>
        </header>
    )
}
