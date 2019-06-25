import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AppState } from './reducers/appState';
import tickerReducer from './reducers/tickerReducer';
import logger from './middleware/logger';

export default function configureStore(initialState: AppState) {
    const store = createStore(tickerReducer, initialState, applyMiddleware(logger, thunk))
    return store;
};