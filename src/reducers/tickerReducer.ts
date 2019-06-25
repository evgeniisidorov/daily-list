import ACTIONS, { TickerAction } from './actions';
import { AppState } from './appState';

const defaultState: AppState = {
    tickers: [],
    tickerDetails: []
};

const tickerReducer = (state = defaultState, action: TickerAction): AppState => {
    switch (action.type) {
        case ACTIONS.Types.FETCH_TICKERS:
            console.log(action);
            return { ...state, tickers: action.result };
        case ACTIONS.Types.FETCH_TICKER_DETAILS:
            console.log(action);
            return { ...state, tickerDetails: [ ...state.tickerDetails, ...action.result ] };
        default:
            return state;
    }
};

export default tickerReducer;