import React from 'react';
import Urls from '../../services/urls';

export interface TickerListProps {
    tickers: any[];
    fetchTickers(url: string): void;
}

interface TickerListState {
    tickerSearchValue: string;
}

export class TickerList extends React.Component<TickerListProps, TickerListState> {
    constructor(props: TickerListProps) {
        super(props);
        this.state = { tickerSearchValue: "" }
    }

    public componentDidMount() {
        this.props.fetchTickers && this.props.fetchTickers(Urls.getALlTickers());
    }

    public render(): JSX.Element {
        return <div>
            <h2>Tickers</h2>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter ticker symbol"
                    onChange={(event) => this.setState({tickerSearchValue: event.target.value})}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
            <ul>
                {this.props.tickers && this.props.tickers.slice(0, 10).map((x, index) => {
                    return <li key={`ticker-${index}`}>{x.symbol}</li>
                })}
            </ul>
        </div>
    }
}