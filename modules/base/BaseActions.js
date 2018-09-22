// Service
import { getBaseMessageFromAPI } from "./BaseService";

// Reducer Interactions [CONSTS]
export const SET_BASE_DATA_TO_STORE = "SET_BASE_DATA_TO_STORE";

// Reducer Interactions [ACTIONS]
export const setBaseDataToStore = payload => ({
    type: SET_BASE_DATA_TO_STORE,
    payload
});

// Actions
export const getBaseMessage = () => dispatch =>
    new Promise((resolve, reject) => {
        getBaseMessageFromAPI()
            .then(response => {
                dispatch(setBaseDataToStore(response));
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
