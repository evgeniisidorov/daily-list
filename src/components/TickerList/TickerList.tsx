import React from 'react';
import Urls from '../../services/urls';
import Fuse, { FuseOptions } from 'fuse.js';
import { TickerSymbol } from '../../models/models';
import { StarButton } from '../StarButton/StarButton';

export interface TickerListProps {
    tickers: TickerSymbol[];
    fetchTickers(url: string): void;
}

interface TickerListState {
    tickerSearchValue: string;
}

export class TickerList extends React.Component<TickerListProps, TickerListState> {
    private readonly searchOptions: FuseOptions<TickerSymbol> = {
        shouldSort: true,
        threshold: 0.3,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "symbol",
            "name"
        ]
    };

    constructor(props: TickerListProps) {
        super(props);
        this.state = { tickerSearchValue: "" }
    }

    public componentDidMount() {
        this.props.fetchTickers && this.props.fetchTickers(Urls.getALlTickers());
    }

    public render(): JSX.Element {
        const fuse = new Fuse(this.props.tickers, this.searchOptions);
        const filteredTickers: TickerSymbol[] = this.props.tickers && this.state.tickerSearchValue
            ? fuse.search(this.state.tickerSearchValue)
            : this.props.tickers;
        return <div>
            <h2>Tickers</h2>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter ticker symbol"
                    onChange={(event) => this.setState({ tickerSearchValue: event.target.value })}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
            <div>
                {filteredTickers && filteredTickers.slice(0, 10).map((x, index) => {
                    return <div
                        style={{
                            marginBottom: 8
                        }}
                        key={`ticker-symbol-card-${x.symbol}`}
                        className="ticker-symbol"
                    >
                        {index !== 0 &&
                            <div
                                className="separator"
                                style={{
                                    marginLeft: 8,
                                    marginRight: 8,
                                    marginBottom: 8,
                                    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
                                }}
                            />}
                        <div className="ticker-card-content">
                            <div className="ticker-card-content-main">
                                <h5>{x.symbol}</h5>
                                <h6>{x.name}</h6>
                            </div>
                            <div className="ticker-card-content-button">
                                {StarButton(false)}
                            </div>
                        </div>

                    </div>
                })}
            </div>
        </div>
    }
}