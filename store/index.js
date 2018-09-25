import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducer from "store/reducer";
import thunk from "redux-thunk";

// Setup
const middleWare = [];

middleWare.push(thunk);
// Logger Middleware. This always has to be last
const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === "development"
});
middleWare.push(loggerMiddleware);

const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(...middleWare)
)(createStore);

const makeStore = (initialState, config) => {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(...middleWare)
    );
    return store;
};

export default makeStore;
