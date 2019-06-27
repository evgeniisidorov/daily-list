const Types = {
    FETCH_TICKERS: "FETCH_TICKERS",
    FETCH_TICKER_DETAILS: "FETCH_TICKER_DETAILS",
    STAR_TICKER: "STAR_TICKER",
    UNSTAR_TICKER: "UNSTAR_TICKER"
};

export interface TickerAction {
    type: string,
    result: any
}

const fetchTickers = (tickers: any): TickerAction => {
    return {
        type: Types.FETCH_TICKERS,
        result: tickers
    }
};

const fetchTickerDetails = (tickerDetails: any): TickerAction => {
    return {
        type: Types.FETCH_TICKER_DETAILS,
        result: tickerDetails
    }
}

const starTicker = (tickerSymbol: string): TickerAction => {
    return {
        type: Types.STAR_TICKER,
        result: tickerSymbol
    }
}

const unstarTicker = (tickerSymbol: string): TickerAction => {
    return {
        type: Types.UNSTAR_TICKER,
        result: tickerSymbol
    }
}

export default {
    fetchTickers,
    fetchTickerDetails,
    starTicker,
    unstarTicker,
    Types
}