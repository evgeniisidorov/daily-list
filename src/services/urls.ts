export const Endpoints = {
    IEXTrading: 'https://api.iextrading.com'
}

export default class Urls {
    static getALlTickers(endpoint: string = Endpoints.IEXTrading): string {
        return `${endpoint}/1.0/ref-data/symbols`;
    }
}