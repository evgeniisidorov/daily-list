import React from 'react';
import Urls from '../../services/urls';
import Fuse, { FuseOptions } from 'fuse.js';
import { TickerSymbol } from '../../models/models';
import { TickerCard } from '../TickerCard/TickerCard';

export interface TickerListProps {
    tickers: TickerSymbol[];
    starredTickers: { [symbol: string]: boolean };
    fetchTickers(url: string): void;
    starTicker(symbol: string): void;
    unstarTicker(symbol: string): void;
    fetchTickerDetails(url: string): void;
}

interface TickerListState {
    tickerSearchValue: string;
}

export class TickerList extends React.Component<TickerListProps, TickerListState> {
    private readonly searchOptions: FuseOptions<TickerSymbol> = {
        shouldSort: true,
        threshold: 0.1,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "symbol",
            "name"
        ]
    };

    private readonly itemsPerPage: number = 10;

    constructor(props: TickerListProps) {
        super(props);
        this.state = {
            tickerSearchValue: ""
        };
        this.starTicker = this.starTicker.bind(this);
        this.unstarTicker = this.unstarTicker.bind(this);
        this.onStarButtonClick = this.onStarButtonClick.bind(this);
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
            {this.state.tickerSearchValue && <span>{`Found ${filteredTickers.length} tickers`}</span>}
            <div>
                {filteredTickers && filteredTickers.slice(0, this.itemsPerPage).map((x, index) => {
                    return <div
                        key={`ticker-symbol-card-${x.symbol}`}
                        className="ticker-symbol"
                    >
                        {index !== 0 && <div className="separator" />}
                        <TickerCard
                            symbol={x.symbol}
                            name={x.name}
                            isStarred={!this.props.starredTickers[x.symbol]}
                            onStarButtonClick={() => this.onStarButtonClick(x)}
                        />
                    </div>
                })}
            </div>
        </div>
    }

    private onStarButtonClick(x: TickerSymbol): void {
        if (this.props.starredTickers[x.symbol]) {
            this.unstarTicker(x.symbol);
        } else {
            this.starTicker(x.symbol);
        }
    }

    private starTicker(symbol: string): void {
        if (this.props.fetchTickerDetails) {
            this.props.fetchTickerDetails(Urls.getTickerDetails([symbol]));
        }
        if (this.props.starTicker) {
            this.props.starTicker(symbol);
        }
    }

    private unstarTicker(symbol: string): void {
        if (this.props.unstarTicker) {
            this.props.unstarTicker(symbol);
        }
    }
}