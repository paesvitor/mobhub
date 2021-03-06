import React, { Component } from "react";
import { pagesRef } from "modules/firebase";

export class AppSinglePage extends Component {
    static async getInitialProps({ query }) {
        try {
            const page = await pagesRef
                .child(`${query.url}`)
                .once("value")
                .then(snap => snap.val());
            return { page };
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <div>page</div>
          </div>
        );
    }
}

export default AppSinglePage;
