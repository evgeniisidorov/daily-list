import ACTIONS, { TickerAction } from './actions';
import { AppState } from './appState';

const defaultState: AppState = {
    tickers: []
};

const tickerReducer = (state = defaultState, action: TickerAction): AppState => {
    switch (action.type) {
        case ACTIONS.Types.FETCH_TICKERS:
            console.log(action);

            return { ...state, tickers: action.result };
        default:
            return state;
    }
};

export default tickerReducer;