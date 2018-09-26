import axios from "axios";

export default axios.create({
    baseURL: "/api",
    headers: {
        Authorization: {
            toString() {
                return `${sessionStorage.getItem("access_token")}`;
            }
        }
    }
});
