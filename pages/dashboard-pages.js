import React, { Fragment } from "react";
import Dashboard from "templates/dashboard";
import {
    MdBrightness1 as StatusIcon,
    MdOpenInNew as LinkIcon
} from "react-icons/md";
import { Alert } from "sagan-ui";
import { pagesRef } from "modules/firebase";
import Link from "next/link";
import ListCard from "components/ListCard";

class Pages extends React.Component {
    static async getInitialProps(ctx) {
        const pages = await pagesRef
            .once("value")
            .then(snapshot => snapshot.val());
        return {
            pages
        };
    }

    render() {
        const { pages } = this.props;

        return (
            <Dashboard
                title="Pages"
                action="Add new page"
                actionUrl="/dashboard/add-page"
            >
                {Object.keys(pages).map(key => (
                    <ListCard item={pages[key]} key={key} slug={key} />
                ))}
            </Dashboard>
        );
    }
}

export default Pages;
