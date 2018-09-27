import axios from "axios";

export const signinService = async (email, password) => {
    try {
        const response = await axios.post(
            "http://localhost:3000/api/users/signin",
            {
                email,
                password
            }
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const signupService = async (displayName, email, password) => {
    try {
        const response = await axios.post(
            "http://localhost:3000/api/users/signup",
            {
                displayName,
                email,
                password
            }
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};
