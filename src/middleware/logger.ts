const logger = (store: any) => (next: any) => (action: any) => {
    console.log(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.log('end');
    return result;
}

export default logger;