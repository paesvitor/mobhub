import React, { Component } from "react";
import { whitelistRef } from "modules/firebase";
import Dashboard from "templates/dashboard";
import EmptyList from "components/empty-list";
import ListCard from "components/ListCard";

export class DashboardUsers extends Component {
    static async getInitialProps() {
        try {
            const users = await whitelistRef
                .once("value")
                .then(snap => snap.val());
            return { users };
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { users } = this.props;
        return (
            <Dashboard
                title="Users"
                action="Add new user"
                actionUrl="/dashboard/add-page"
            >
                {users ? (
                    Object.keys(users).map(key => {
                        const user = users[key];

                        return (
                            <ListCard
                                thumbnail="https://opstatics.com/store/20170907/assets/images/user/user-info/avatar-default.png"
                                title={user.email}
                                subtitle="created by: 14/09/98"
                                helper={
                                    user.registered ? (
                                        <div>Registered</div>
                                    ) : (
                                        <div>Awaiting Registration</div>
                                    )
                                }
                            />
                        );
                    })
                ) : (
                    <EmptyList>No users created. Add new user.</EmptyList>
                )}
            </Dashboard>
        );
    }
}

export default DashboardUsers;
