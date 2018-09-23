import React, { Component } from "react";
import { Button, Input, FormGroup, Alert, Label } from "sagan-ui";
import { connect } from "react-redux";
import { signin as signinAction } from "modules/auth/AuthActions";
import PropTypes from "prop-types";
import FormPage from "templates/form-page";
import { Link, Router } from "routes";

export class SigninScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            loadingRequest: false
        };
    }

    handleInputChange = e => {
        const {
            target: { value, name }
        } = e;

        this.setState({ [name]: value });
    };

    validateFields = () => {
        const { email, password } = this.state;
        return email && password;
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        const { signin, history } = this.props;

        this.setState({ error: null, loadingRequest: true });

        try {
            if (this.validateFields()) {
                (await signin(email, password)) &&
                    Router.push("/dashboard/home");
            } else {
                throw new Error("You must fill in required fields");
            }
        } catch (error) {
            this.setState({ error: error.message, loadingRequest: false });
        }
    };

    render() {
        const { error, loadingRequest } = this.state;

        return (
            <FormPage>
                <h2 className="text-center">Signin</h2>

                <form className="auth-form" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            onChange={this.handleInputChange}
                            type="email"
                            placeholder="email@email.com"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            onChange={this.handleInputChange}
                            type="password"
                            placeholder="Senha"
                        />
                    </FormGroup>

                    {error && (
                        <Alert className="text-center" color="danger">
                            {error}
                        </Alert>
                    )}

                    <Button size="sm" fluid loading={loadingRequest}>
                        Signin
                    </Button>

                    <Link route="/dashboard/signup">
                        <a className="text-center block mt-md">
                            Dont have an account? Signup
                        </a>
                    </Link>

                    <Link route="/">
                        <a className="text-center block mt-md">Back to home</a>
                    </Link>
                </form>
            </FormPage>
        );
    }
}

SigninScreen.propTypes = {
    signin: PropTypes.func,
    history: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
    signin: (email, password) => dispatch(signinAction(email, password))
});

export default connect(
    null,
    mapDispatchToProps
)(SigninScreen);
