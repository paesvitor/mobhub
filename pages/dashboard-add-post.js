import React from "react";
import Dashboard from "templates/dashboard";
import { FormGroup, Input, Label, Form, Button, Alert } from "sagan-ui";
import Swal from "sweetalert2";
import { Router } from "../routes";
import { createPost } from "modules/post/PostActions";

class DashboardAddPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            loadingRequest: false,
            form: {}
        };
    }

    handleInputChange = event => {
        const {
            target: { value, name }
        } = event;
        this.setState(prevState => ({
            form: { ...prevState.form, [name]: value }
        }));
    };

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ error: null, loadingRequest: true });
        const { form } = this.state;

        try {
            createPost({ ...form }) && Router.push("/dashboard/posts");
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
                            required
                            autoComplete="off"
                            type="text"
                            name="title"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label
                            helper="Your post ID and friendly URL. 
                            Use dashes to separte words [eg: my-post]. 
                            Leave it blank to auto generate slug"
                        >
                            Slug
                        </Label>
                        <Input
                            autoComplete="off"
                            type="text"
                            name="slug"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label helper="Paste an image URL">Thumbnail</Label>
                        <Input
                            autoComplete="off"
                            type="text"
                            name="thumbnail"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Text</Label>
                        <Input
                            required
                            autoComplete="off"
                            type="text"
                            name="text"
                            onChange={this.handleInputChange}
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
