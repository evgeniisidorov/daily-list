import actions from "../reducers/actions";

export interface ITickerService {
    fetchTickers: (url: string) => any;
    // fetchTickersDetails: (url: string, tickers: string[]) => any;
}

export class TickerServiceImplementation implements ITickerService {
    validateResponse(response: Response): Promise<any> {
        if (response.ok && response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error("Invalid response"));
        }
    }

    readData(
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

    fetchUrl(
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
}