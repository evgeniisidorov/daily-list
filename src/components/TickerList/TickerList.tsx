import React from 'react';
import Urls from '../../services/urls';

export interface TickerListProps {
    tickers: any[];
    fetchTickers(url: string): void;
}

export class TickerList extends React.Component<TickerListProps> {
    public componentDidMount() {
        this.props.fetchTickers && this.props.fetchTickers(Urls.getALlTickers());
    }
    public render(): JSX.Element {
        return <div>
            <p>Tickers</p>
            <ul>
                {this.props.tickers && this.props.tickers.slice(0, 10).map((x, index) => {
                    return <li key={`ticker-${index}`}>{x.symbol}</li>
                })}
            </ul>
        </div>
    }
}