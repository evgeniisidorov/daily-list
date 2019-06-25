export const Endpoints = {
    IEXTrading: 'https://api.iextrading.com'
}

export default class Urls {
    static getALlTickers(endpoint: string = Endpoints.IEXTrading): string {
        return `${endpoint}/1.0/ref-data/symbols`;
    }

    static getTickerDetails(
        tickerSybmbols: string[],
        endpoint: string = Endpoints.IEXTrading
    ): string {
        const params = tickerSybmbols.map(x => x.trim()).join(',');
        return `${endpoint}/1.0/tops/last?symbols=${params}`;
    }
}