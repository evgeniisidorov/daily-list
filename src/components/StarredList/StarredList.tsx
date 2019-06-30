import React from 'react';
import Urls from '../../services/urls';
import { TickerDetails, TickerSymbol } from '../../models/models';
import * as _ from 'lodash';
import { TickerCard } from '../TickerCard/TickerCard';

export interface StarredListProps {
    tickers: TickerSymbol[];
    tickerDetails: TickerDetails[];
    starredTickers: { [symbol: string]: boolean };
    unstarTicker(symbol: string): void;
}

export class StarredList extends React.Component<StarredListProps> {
    public render(): JSX.Element {
        const starredSymbols: string[] = _.map(
            _.filter(
                _.toPairs(this.props.starredTickers),
                x => x[1]),
            x => x[0]);

        const tickerSymbolsHashTable = _.groupBy(this.props.tickers, "symbol");
        const tickerDetailsHashTable = _.groupBy(this.props.tickerDetails, "symbol");

        const starredTickerDetails = _.compact(
            _.map(
                starredSymbols,
                x => {
                    if (tickerDetailsHashTable[x] && tickerSymbolsHashTable[x]) {
                        const tickerSymbol = tickerSymbolsHashTable[x].shift();
                        const tickerDetails = tickerDetailsHashTable[x].shift();
                        if (tickerDetails && tickerSymbol) {
                            return {
                                symbol: tickerSymbol.symbol,
                                name: tickerSymbol.name,
                                price: tickerDetails.price
                            };
                        }
                    }
                    return undefined;
                }));

        return <div>
            <h2>Starred tickers</h2>
            <div>
                {starredTickerDetails.map((x, index) => {
                    return <div
                        key={`ticker-details-card-${x.symbol}`}
                        className="ticker-detail"
                    >
                        {index !== 0 && <div className="separator" />}
                        <TickerCard
                            symbol={x.symbol}
                            name={x.name}
                            price={x.price}
                            isStarred={!this.props.starredTickers[x.symbol]}
                            onStarButtonClick={() => null}
                        />
                    </div>;
                })}
            </div>
        </div>
    }
}