import { connect } from 'react-redux';
import { AppState } from '../../reducers/appState';
import { TickerList } from './TickerList';
import { tickerService } from '../../services';

const mapStateToProps = (state: AppState) => ({
    tickers: state.tickers
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchTickers: (url: string) => dispatch(tickerService.fetchTickers(url))
});

export const TIckerListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TickerList);