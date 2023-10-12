import React from 'react';
import { BiFilter } from 'react-icons/bi'
import './CFilter.scss';

interface CFilterProps {

}

export const CFilter: React.FC<CFilterProps> = () => {
    return (
        <label htmlFor="category" className='category__filter'> <h4>категории<BiFilter /></h4>

            <select name='category' id='category'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </label>
    )
}
