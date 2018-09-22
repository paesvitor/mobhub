import axios from "axios";

export const getBaseMessageFromAPI = () =>
    new Promise((resolve, reject) => {
        axios
            .get("https://swapi.co/api/people/1/")
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
