export interface TickerSymbol {
    symbol: string;
    iexId: 2;
    name: string;
    date: string;
    isEnabled: boolean;
    type: string;
}

export interface TickerDetails {
    symbol: string;
    price: number;
    size: number;
    time: number
}
