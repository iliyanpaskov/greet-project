import React from 'react';
import './CHeaderImage.scss';

interface CHeaderImageProps {
    imageUrl: string;
    altText: string;
}

export const CHeagerImage: React.FC<CHeaderImageProps> = ({
    imageUrl,
    altText
}) => {
    return (
        <div className='header__image__wrapper'>
            <img src={imageUrl} alt={altText} />
        </div>
    )
}
