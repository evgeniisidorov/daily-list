import { connect } from 'react-redux';
import { AppState } from '../../reducers/appState';
import { TickerList } from './TickerList';
import { tickerService } from '../../services';

const mapStateToProps = (state: AppState) => ({
    tickers: state.tickers,
    starredTickers: state.starredTickers
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchTickers: (url: string) => dispatch(tickerService.fetchTickers(url)),
    starTicker: (symbol: string) => dispatch(tickerService.starTicker(symbol)),
    unstarTicker: (symbol: string) => dispatch(tickerService.unstarTicker(symbol)),
});

export const TickerListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TickerList);