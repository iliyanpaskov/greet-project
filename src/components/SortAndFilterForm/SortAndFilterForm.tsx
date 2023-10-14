import React from 'react';
import { CLogo } from '../common/CLogo/CLogo';
import { CFilter } from '../common/CFilter/CFilter';
import { CSort } from '../common/CSort/CSort';
import './SortAndFilterForm.scss';

interface SortAndFilterFormProps { }

export const SortAndFilterForm: React.FC<SortAndFilterFormProps> = () => {

    return (
        <section className='sort__filter__section'>
            <div className='logo__wrapper'>
                <CLogo />
            </div>
            <CFilter />
            <CSort />
            <div className='logo__wrapper'>
                <CLogo />
            </div>
        </section>
    )
}
