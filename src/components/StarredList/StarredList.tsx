import React from 'react';
import Urls from '../../services/urls';

export interface StarredListProps {
    tickerDetails: any[];
    fetchTickerDetails(url: string): void;
}

export class StarredList extends React.Component<StarredListProps> {
    private readonly symbols: string[] = ['AAPL', 'fb']

    public componentDidMount() {
        this.props.fetchTickerDetails &&
            this.props.fetchTickerDetails(Urls.getTickerDetails(this.symbols));
    }
    public render(): JSX.Element {
        return <div>
            <h2>Starred tickers</h2>
            <ul>
                {this.props.tickerDetails && this.props.tickerDetails.slice(0, 10).map((x, index) => {
                    return <li key={`ticker-${index}`}>{x.symbol}</li>
                })}
            </ul>
        </div>
    }
}