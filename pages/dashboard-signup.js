import React, { Component } from "react";
import { Button, Input, FormGroup, Alert, Label, Form } from "sagan-ui";
import { connect } from "react-redux";
import { signup as signupAction } from "modules/auth/AuthActions";
import PropTypes from "prop-types";
import FormPage from "templates/form-page";
import { Link } from "routes";

export class SignupScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            success: null,
            loadingRequest: false
        };
    }

    validateForm = () =>
        this.validateEmptyFields() && this.validatePasswordMatch();

    validatePasswordMatch = () => {
        const { password, passwordConfirm } = this.state;
        if (password !== passwordConfirm) {
            throw new Error("Passwords do not match");
        }
        return true;
    };

    validateEmptyFields = () => {
        const { email, password, passwordConfirm, code } = this.state;
        const fields = { email, password, passwordConfirm, code };
        let hasErrors = false;
        Object.keys(fields).map(key => {
            if (!fields[key]) {
                hasErrors = true;
                const errorField = `${key}Error`;
                this.setState({ [errorField]: "This field is required" });
            }
        });
        return !hasErrors;
    };

    // Handlers
    handleInputChange = e => {
        const {
            target: { value, name }
        } = e;
        const errorField = `${name}Error`;
        this.setState({ [name]: value, [errorField]: null });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ error: null, loadingRequest: true });
        const { signup } = this.props;
        const { email, password, code } = this.state;

        try {
            this.validateForm() &&
                (await signup(code, email, password)) &&
                this.setState({ success: true, loadingRequest: false });
        } catch (error) {
            this.setState({ error: error.message, loadingRequest: false });
        } finally {
            this.setState({ loadingRequest: false });
        }
    };

    render() {
        const { error, success, loadingRequest } = this.state;

        return (
            <FormPage>
                <h2 className="text-center">Signup</h2>

                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label helper="6 numbers">Invite Code</Label>
                        <Input
                            name="code"
                            onChange={this.handleInputChange}
                            type="number"
                            placeholder="000000"
                            error={this.state.codeError}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label id="email">Email</Label>
                        <Input
                            name="email"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="email@provider.com"
                            error={this.state.emailError}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label helper="Must contain 6 characters">
                            Password
                        </Label>
                        <Input
                            name="password"
                            onChange={this.handleInputChange}
                            type="password"
                            placeholder="******"
                            error={this.state.passwordError}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Confirm Password</Label>
                        <Input
                            name="passwordConfirm"
                            onChange={this.handleInputChange}
                            type="password"
                            placeholder="******"
                            error={this.state.passwordConfirmError}
                        />
                    </FormGroup>

                    {success && (
                        <Alert className="text-center" color="info">
                            {success}
                            <Link to="/entrar">
                                You registered successfully. Click here to login
                            </Link>
                        </Alert>
                    )}
                    {error && (
                        <Alert className="text-center" color="danger">
                            {error}
                        </Alert>
                    )}

                    <Button
                        fluid
                        size="sm"
                        color="primary"
                        loading={loadingRequest}
                    >
                        Signup
                    </Button>

                    <Link route="/dashboard/signin">
                        <a className="text-center block mt-md">
                            Alredy registered? Signin
                        </a>
                    </Link>
                </Form>
            </FormPage>
        );
    }
}

SignupScreen.propTypes = {
    signup: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    signup: (code, email, password) =>
        dispatch(signupAction(code, email, password))
});

export default connect(
    null,
    mapDispatchToProps
)(SignupScreen);
