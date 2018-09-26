import React from "react";
import Dashboard from "templates/dashboard";
import {
    MdBrightness1 as StatusIcon,
    MdOpenInNew as LinkIcon
} from "react-icons/md";

class DashboardProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return <Dashboard title="Profile">profile</Dashboard>;
    }
}

export default DashboardProfile;
