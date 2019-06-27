import actions from "../reducers/actions";

export interface ITickerService {
    fetchTickers: (url: string) => any;
    fetchTickerDetails: (url: string) => any;
    starTicker: (symbol: string) => any;
    unstarTicker: (symbol: string) => any;
}

export class TickerServiceImplementation implements ITickerService {
    private validateResponse(response: Response): Promise<any> {
        if (response.ok && response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error("Invalid response"));
        }
    }

    private readData(
        response: Response, type: XMLHttpRequestResponseType
    ): Promise<any> {
        const contentType = response.headers.get('content-type');
        if (response.headers.get('content-length') === '0') {
            return Promise.resolve();
        } else if (contentType && contentType.indexOf(type) < 0) {
            return Promise.reject(new Error(`${contentType} is not valid. Expected ${type}`));
        }

        switch (type) {
            case 'text': return response.text();
            case 'blob': return response.blob();
            case 'json': return response.json();
            default: throw `Unknown response type '${type}'`;
        }
    }

    private fetchUrl(
        url: string,
        responseType: XMLHttpRequestResponseType = 'json'
    ): Promise<any> {
        return fetch(url, {
            cache: 'no-store'
        }).then(this.validateResponse)
            .then((response) => this.readData(response, responseType));
    }

    fetchTickers = (url: string) => {
        return (dispatch: any) => {
            return this.fetchUrl(url)
                .then((items) => dispatch(actions.fetchTickers(items)))
                .catch(error => console.log('failure'));
        }
    }

    fetchTickerDetails = (url: string) =>{
        return (dispatch: any) => {
            return this.fetchUrl(url)
            .then((items ) => dispatch(actions.fetchTickerDetails(items)))
        }
    }

    starTicker = (symbol: string) => {
        return (dispatch: any) => {
            return dispatch(actions.starTicker(symbol));
        } 
    }

    unstarTicker = (symbol: string) => {
        return (dispatch: any) => {
            return dispatch(actions.unstarTicker(symbol));
        } 
    } 
}