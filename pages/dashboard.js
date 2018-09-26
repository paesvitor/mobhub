import React, { Component } from "react";
import Dashboard from "templates/dashboard";
export class componentName extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            loading: true
        };
    }

    // fetchData = async () => {
    //     try {
    //         const { data } = await axios.get("/api/dashboard/home");

    //         this.setState({ data, loading: false });
    //     } catch (error) {
    //         throw new Error(error);
    //     }
    // };

    // componentWillMount = () => {
    //     this.fetchData();
    // };

    render() {
        return <Dashboard>oie</Dashboard>;
    }
}

export default componentName;
