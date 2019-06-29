import React from 'react';
import { StarButton } from '../StarButton/StarButton';

export interface TickerCardProps {
    symbol: string;
    name: string;
    price?: number;
    isStarred: boolean;
    onStarButtonClick(): void;
}

export class TickerCard extends React.Component<TickerCardProps> {
    public render() {
        return (
            <div className="ticker-card-content">
                <div className="ticker-card-content-main">
                    <h5>{this.props.symbol}</h5>
                    <h6>{this.props.name}</h6>
                    {this.props.price && <p>{this.props.price}</p>}
                </div>
                <div className="ticker-card-content-button">
                    <div className={
                        this.props.isStarred &&
                        'ticker-card-content-button-hide-star' || ""
                    } >
                        {StarButton(this.props.isStarred, () => this.props.onStarButtonClick())}
                    </div>
                </div>
            </div>
        );
    }
}