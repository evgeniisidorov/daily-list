import ACTIONS, { TickerAction } from './actions';
import { AppState } from './appState';

const defaultState: AppState = {
    tickers: [],
    tickerDetails: [],
    starredTickers: {}
};

const tickerReducer = (state = defaultState, action: TickerAction): AppState => {
    switch (action.type) {
        case ACTIONS.Types.FETCH_TICKERS:
            return { ...state, tickers: action.result };
        case ACTIONS.Types.FETCH_TICKER_DETAILS:
            return { ...state, tickerDetails: action.result };
        case ACTIONS.Types.STAR_TICKER:
            let starredSymbols: any = {};
            starredSymbols[action.result] = true;
            return {...state, starredTickers: {...state.starredTickers,...starredSymbols}};
        case ACTIONS.Types.UNSTAR_TICKER:
            let unstaredSymbols: any = {};
            unstaredSymbols[action.result] = undefined;
            return {...state, starredTickers: {...state.starredTickers, ...unstaredSymbols}};
        default:
            return state;
    }
};

export default tickerReducer;