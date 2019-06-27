import React from 'react';
import { TickerListContainer } from './components/TickerList/TickerListContainer';
import { StarredListContainer } from './components/StarredList/StarredListContainer';

const App: React.FC = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <TickerListContainer />
                </div>
                <div className="col-md-6 col-sm-12">
                    <StarredListContainer />
                </div>
            </div>
        </div>
    );
}

export default App;
