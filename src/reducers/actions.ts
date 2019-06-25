const Types = {
    FETCH_TICKERS: "FETCH_TICKERS"
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

export default {
    fetchTickers,
    Types
}