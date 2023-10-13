import React from 'react';
import { ICategories, IProduct } from '../../Interfaces/interfaces';
import { CAddToCartButton } from '../common/CAddToCartButton/CAddToCartButton';
import './ProductCard.scss';

interface ProductCardProps {
    product: IProduct,
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
                <div className='card__name__price__button__wrapper'>
                    <h3 dangerouslySetInnerHTML={{__html:product.name}}></h3>
                    <div className='card__price' dangerouslySetInnerHTML={{__html:product.price_html}}></div>
                    <CAddToCartButton id={product.id} />
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
