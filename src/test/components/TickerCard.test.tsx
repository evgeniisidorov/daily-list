import React from 'react';
import { shallow } from 'enzyme';
import { TickerCard, TickerCardProps } from '../../components/TickerCard/TickerCard';

const tickerCardProps: TickerCardProps = {
    symbol: 'APPL',
    name: 'Apple',
    price: 213.6,
    isStarred: true,
    onStarButtonClick: jest.fn()
}

describe('<TickerCard />', () => {
    it('renders symbol, name, and price', () => {
        const wrapper = shallow(<TickerCard {...tickerCardProps} />);
        const symbol = <h5>APPL</h5>;
        const name = <h6>Apple</h6>;
        const price = <span>$ 213.6</span>;
        expect(wrapper.contains(symbol)).toEqual(true);
        expect(wrapper.contains(name)).toEqual(true);
        expect(wrapper.contains(price)).toEqual(true);
    });
});
