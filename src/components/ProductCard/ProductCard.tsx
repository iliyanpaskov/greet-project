import React from 'react';
import { ICategories, IProduct } from '../../Interfaces/interfaces';
import './ProductCard.scss';
import { CAddToCartButton } from '../common/CAddToCartButton/CAddToCartButton';

interface ProductCardProps {
    product: IProduct
}

export const ProductCard: React.FC<ProductCardProps> = ({
    product
}) => {

    const categories: ICategories[] = product.categories;

    return (
        <article className='card__wrapper'>
            <section className='card'>
                <div className='card__image'>
                    <img src={product.images[0].src} alt="product" />
                </div>
                <div className='card__name__button__wrapper'>
                    <h3 dangerouslySetInnerHTML={{__html:product.name}}></h3>
                    <CAddToCartButton />
                </div>
                <section className='card__content'>
                    <div>
                    {
                        categories.map((x)=><h4 key={x.id}>{x.name}</h4>)
                    }
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: product.short_description }} />
                </section>
            </section>
        </article>
    )
}
