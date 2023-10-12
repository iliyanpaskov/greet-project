import React from 'react';
import './SortAndFilterForm.scss';
import { CLogo } from '../common/CLogo/CLogo';
import { CFilter } from '../common/CFilter/CFilter';
import { CSort } from '../common/CSort/CSort';
import { CSubmitButton } from '../common/CSubmitButton/CSubmitButton';

interface SortAndFilterFormProps {

}

export const SortAndFilterForm: React.FC<SortAndFilterFormProps> = () => {
    return (
        <form className='sort__filter__form'>
            <div className='logo__wrapper'>
                <CLogo />
            </div>
            <CFilter />
            <CSort/>
            <CSubmitButton/>
        </form>
    )
}
