import { TickerSymbol, TickerDetails } from "../models/models";

export interface AppState {
    tickers: TickerSymbol[];
    tickerDetails: TickerDetails[];
    starredTickers: { [symbol: string]: boolean };
}