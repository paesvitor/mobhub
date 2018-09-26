import axios from "axios";

export const signinService = async (email, password) => {
    try {
        const response = await axios.post(
            "http://localhost:3000/api/users/signin",
            {
                email,
                password: password
            }
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};
