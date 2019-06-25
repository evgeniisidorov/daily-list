import { connect } from 'react-redux';
import { AppState } from '../../reducers/appState';
import { tickerService } from '../../services';
import { StarredList } from './StarredList';

const mapStateToProps = (state: AppState) => ({
    tickerDetails: state.tickerDetails
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchTickerDetails: (url: string) => dispatch(tickerService.fetchTickerDetails(url))
});

export const StarredListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StarredList);