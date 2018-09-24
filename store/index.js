import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducer from "store/reducer";
import thunk from "redux-thunk";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

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

const makeConfiguredStore = (reducer, initialState) =>
    createStore(reducer, initialState, applyMiddleware(...middleWare));

const makeStore = (initialState, { isServer, req, debug, storeKey }) => {
    if (isServer) {
        initialState = initialState || { fromServer: "foo" };

        return makeConfiguredStore(reducer, initialState);
    }
    // we need it only on client side
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
        key: "nextjs",
        storage
    };

    const persistedReducer = persistReducer(persistConfig, reducer);
    const store = makeConfiguredStore(reducer, initialState);
    // Nasty hack
    // store.__persistor = persistStore(store);

    return store;
};

export default makeStore;
