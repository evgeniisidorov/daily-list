import React from 'react';

import { ReactComponent as StarIcon } from './star.svg';
import { ReactComponent as OutlinedStarIcon } from './outlinestar.svg';

export function StarButton(hasOutline: boolean, onClick: () => void): JSX.Element {
    return <div className="star-button" onClick={onClick}> {hasOutline ? <OutlinedStarIcon /> : <StarIcon />}</div>;
};