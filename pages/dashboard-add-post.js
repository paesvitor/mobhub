import React from "react";
import Dashboard from "templates/dashboard";
import { FormGroup, Input, Label, Form, Button, Alert } from "sagan-ui";
import { postsRef } from "modules/firebase";
import Swal from "sweetalert2";
import { Router } from "../routes";
class DashboardAddPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            loadingRequest: false
        };
    }

    validateEmptyFields = () => {
        const { title, slug, content, thumbnail } = this.state;
        const fields = { title, slug, content, thumbnail };
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
        const { title, slug, content, thumbnail } = this.state;

        try {
            this.validateEmptyFields() &&
                postsRef.child(`${slug}`).set({ title, content, thumbnail }) &&
                Swal({
                    title: "Success!",
                    type: "success",
                    text: `Your post ${title} has been added.`,
                    heightAuto: false,
                    confirmButtonText: "View Posts"
                }).then(res => {
                    res.value && Router.push("/dashboard/posts");
                });
        } catch (error) {
            this.setState({ error: error.message, loadingRequest: false });
        } finally {
            this.setState({ loadingRequest: false });
        }
    };

    render() {
        const { error, loadingRequest } = this.state;

        return (
            <Dashboard title="Add new post">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input
                            type="text"
                            name="title"
                            onChange={this.handleInputChange}
                            error={this.state.titleError}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label helper="Your post ID and friendly URL. Use dashes to separte words [eg: my-post]">
                            Slug
                        </Label>
                        <Input
                            type="text"
                            name="slug"
                            onChange={this.handleInputChange}
                            error={this.state.slugError}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Content</Label>
                        <Input
                            type="text"
                            name="content"
                            onChange={this.handleInputChange}
                            error={this.state.contentError}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label helper="Paste an image URL">Thumbnail</Label>
                        <Input
                            type="text"
                            name="thumbnail"
                            onChange={this.handleInputChange}
                            error={this.state.thumbnailError}
                        />
                    </FormGroup>

                    {error && <Alert color="danger">error: {error}</Alert>}

                    <Button border="rounded" size="sm" loading={loadingRequest}>
                        Add Post
                    </Button>
                </Form>
            </Dashboard>
        );
    }
}

export default DashboardAddPage;
