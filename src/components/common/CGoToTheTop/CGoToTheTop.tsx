import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import './CGoToTheTop.scss';

export const CGoToTheTop = () => {
    return (
        <div className='pulse'>
            <div className="pulse__ring one"></div>
            <div className="pulse__ring two"></div>
            <div className="pulse__ring three"></div>
            <div className="pulse__ring four"></div>
            <a href="#header">
                <BsFillArrowUpCircleFill />
            </a>
        </div>
    )
}
