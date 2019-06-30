import React from 'react';

import { ReactComponent as StarIcon } from './star.svg';
import { ReactComponent as OutlinedStarIcon } from './outlinestar.svg';

interface StarButtonProps {
    isStarred: boolean;
    onClick: () => void;
}
export const StarButton: React.FC<StarButtonProps> = (props) => {
    return <div className="star-button" onClick={props.onClick}> {props.isStarred ? <OutlinedStarIcon /> : <StarIcon />}</div>;
};

