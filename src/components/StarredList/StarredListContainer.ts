import { connect } from 'react-redux';
import { AppState } from '../../reducers/appState';
import { tickerService } from '../../services';
import { StarredList } from './StarredList';

const mapStateToProps = (state: AppState) => ({
    tickers: state.tickers,
    tickerDetails: state.tickerDetails,
    starredTickers: state.starredTickers
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchTickerDetails: (url: string) => dispatch(tickerService.fetchTickerDetails(url)),
    unstarTicker: (symbol: string) => dispatch(tickerService.unstarTicker(symbol))
});

export const StarredListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StarredList);