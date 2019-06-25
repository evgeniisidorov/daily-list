const Types = {
    FETCH_TICKERS: "FETCH_TICKERS",
    FETCH_TICKER_DETAILS: "FETCH_TICKER_DETAILS"
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

export default {
    fetchTickers,
    fetchTickerDetails,
    Types
}