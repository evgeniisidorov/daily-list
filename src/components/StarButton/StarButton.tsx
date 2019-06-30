import React from 'react';

import { ReactComponent as StarIcon } from './star.svg';
import { ReactComponent as OutlinedStarIcon } from './outlinestar.svg';

interface StarButtonProps {
    hasOutline: boolean;
    onClick: () => void;
}
export const StarButton: React.FC<StarButtonProps> = (props) => {
    return <div className="star-button" onClick={props.onClick}> {props.hasOutline ? <OutlinedStarIcon /> : <StarIcon />}</div>;
};

