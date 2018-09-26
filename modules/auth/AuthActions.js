import firebaseApp from "firebase/app";
import "firebase/auth";
import { whitelistRef } from "modules/firebase";
import { signinService } from "./AuthServices";
import { Router } from "routes";

/**
 * Check if invitation code is valid
 * @param {String} code
 * @param {String} email
 * @returns {Boolean}
 */
const codeIsValid = (code, email) =>
    whitelistRef
        .child(code)
        .once("value")
        .then(
            snapshot =>
                snapshot.exists() &&
                snapshot.val().email === email &&
                !snapshot.val().registered
        )
        .then(valid => valid);

/**
 * Invalidate code after user successfuly registered
 * @param {String} code
 * @returns {void}
 */

const invalidateCode = code => {
    whitelistRef.child(code).update({ registered: true });
};

/**
 * Creates user at database
 * @param {String} code
 * @param {String} email
 * @param {String} password
 */
export const signup = (code, email, password) => () =>
    new Promise(async (resolve, reject) => {
        if (await codeIsValid(code, email)) {
            firebaseApp
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(success => {
                    invalidateCode(code);
                    resolve(success);
                })
                .catch(error => reject(error));
        } else {
            reject(new Error("Invalid invitation code"));
        }
    });
/**
 * Signin user to app
 * @param {String} email
 * @param {String} password
 * @returns {Object}
 */
export const signin = async (email, password) => {
    try {
        const auth = await signinService(email, password);
        await sessionStorage.setItem("access_token", auth.data.access_token);
        return auth;
    } catch (error) {
        throw new Error(error);
    }
};

/**
 * Signout user from app and redirects to login
 * @returns {void}
 */
export const signout = () => sessionStorage.clear();
