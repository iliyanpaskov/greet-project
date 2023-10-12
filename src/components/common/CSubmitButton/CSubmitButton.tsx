import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './CSubmitButton.scss';

interface CSubmitButtonProps { }

export const CSubmitButton: React.FC<CSubmitButtonProps> = () => {
    return (
        <div className='submit__button__wrapper'>
            <input type="submit" value={""} />
            <BiSearchAlt/>
        </div>
    )
}
