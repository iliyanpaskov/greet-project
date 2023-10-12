import React from 'react';
import './SortAndFilterForm.scss';
import { CLogo } from '../common/CLogo/CLogo';
import { CFilter } from '../common/CFilter/CFilter';

interface SortAndFilterFormProps {

}

export const SortAndFilterForm: React.FC<SortAndFilterFormProps> = () => {
    return (
        <form className='sort__filter__form'>
            <div className='logo__wrapper'>
                <CLogo />
            </div>
            <CFilter />
        </form>
    )
}
