import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const IconText = ({ displayText, iconName, active, targetLink, onclick }) => {
    return (
        <Link to={targetLink} className='block'>
            <div className="flex items-center justify-start cursor-pointer" onClick={onclick}>
                <div className='px-5 py-3'>
                    <Icon
                        color={active ? "white" : "gray"}
                        fontSize={27}
                        icon={iconName}
                    />
                </div>
                <div className={`${active ? "text-white" : "text-gray-400"} text-sm font-semibold hover:text-white`}>{displayText}</div>
            </div>
        </Link>
    )
}

export default IconText;