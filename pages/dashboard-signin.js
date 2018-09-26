import React, { Component } from "react";
import { Button, Input, FormGroup, Alert, Label } from "sagan-ui";
import { connect } from "react-redux";
import { signin } from "modules/auth/AuthActions";
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

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ error: null, loadingRequest: true });
        const { email, password } = this.state;
        try {
            (await signin(email, password)) && Router.push("/dashboard/home");
        } catch (error) {
            this.setState({ error: error.message, loadingRequest: false });
        }
    };

    render() {
        const { error, loadingRequest } = this.state;

        return (
            <FormPage>
                <form className="auth-form" onSubmit={this.handleSubmit}>
                    <h2 className="text-center">Signin</h2>
                    <hr />

                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            required
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
                            required
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

                    <hr />

                    <Link route="/dashboard/signup">
                        <a className="form-link">
                            Don't have an account? <span>Signup</span>
                        </a>
                    </Link>
                </form>
            </FormPage>
        );
    }
}

SigninScreen.propTypes = {};

export default SigninScreen;
