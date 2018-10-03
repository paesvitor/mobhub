import React, { Fragment } from "react";
import Dashboard from "templates/dashboard";
import {
    MdBrightness1 as StatusIcon,
    MdOpenInNew as LinkIcon
} from "react-icons/md";

class DashboardConfiguration extends React.Component {
    render() {
        return (
            <Dashboard title="Configuration">
                <div>Configuration</div>
            </Dashboard>
        );
    }
}

export default DashboardConfiguration;
