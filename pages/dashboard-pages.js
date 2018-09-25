import React, { Fragment } from "react";
import Dashboard from "templates/dashboard";
import {
    MdBrightness1 as StatusIcon,
    MdOpenInNew as LinkIcon
} from "react-icons/md";
import { pagesRef } from "modules/firebase";
import ListCard from "components/ListCard";
import EmptyList from "components/empty-list";

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
                {pages ? (
                    Object.keys(pages).map(key => (
                        <ListCard item={pages[key]} key={key} slug={key} />
                    ))
                ) : (
                    <EmptyList action="/dashboard/add-page">
                        No pages created. Add new page
                  </EmptyList>
                )}
          </Dashboard>
        );
    }
}

export default Pages;
