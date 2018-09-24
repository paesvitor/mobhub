import React from "react";
import Dashboard from "templates/dashboard";
import { Form, FormGroup, Input, Label, Button } from "sagan-ui";
import {
    MdBrightness1 as StatusIcon,
    MdOpenInNew as LinkIcon
} from "react-icons/md";
import firebase from "firebase";
import "firebase/auth";

class DashboardProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            loading: true
        };
    }

    componentWillMount = async () => {
        await firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const user = firebase.auth().currentUser;
                this.setState({ user, loading: false });
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {
            user: { displayName }
        } = this.state;

        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName
        });
    };

    handleInputChange = e => {
        const {
            target: { value, name }
        } = e;
        let user = Object.assign({}, this.state.user);
        Object.assign(user, { [name]: value });
        this.setState({ user });
    };

    render() {
        const { user, loading } = this.state;

        if (loading) {
            return "loading";
        }

        return (
            <Dashboard title="Profile">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Display Name</Label>
                        <Input
                            type="text"
                            name="displayName"
                            defaultValue={user.displayName}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="text"
                            disabled
                            defaultValue={user.email}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <Button size="sm" border="rounded">
                        Update User
                    </Button>
                </Form>
            </Dashboard>
        );
    }
}

export default DashboardProfile;
