import React, { Component } from "react";
import { pagesRef } from "modules/firebase";

export class Single extends Component {
    static async getInitialProps({ query }) {
        try {
            const page = await pagesRef
                .child(`${query.url}`)
                .once("value")
                .then(snap => snap.val());

            console.log(page);

            return { page };
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <div>page</div>
                {console.log(this.props)}
            </div>
        );
    }
}

export default Single;
