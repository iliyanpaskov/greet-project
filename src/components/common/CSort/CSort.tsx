import React from 'react';
import { BiSortDown } from 'react-icons/bi';
import './CSort.scss';

interface CSortProps {}

export const CSort:React.FC<CSortProps> = () => {
  return (
    <label htmlFor="sort" className='sort'> <h4>сортирай <BiSortDown/></h4>
            <select name='sort' id='sort'>
                <option value="1">Цена нарастваща </option>
                <option value="2">Цена намаляваща</option>
                <option value="3">Азбучен ред А-Я</option>
                <option value="4">Азбучен ред Я-А</option>
            </select>
        </label>
  )
}
