import React from "react";
import Dashboard from "templates/dashboard";
import { FormGroup, Input, Label, Form, Button, Alert } from "sagan-ui";
import { pagesRef } from "modules/firebase";

class AddPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
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
        const { name, slug, title, content } = this.state;
        try {
            await pagesRef.child(`${slug}`).set({ name, title, content });
        } catch (error) {
            console.log(object);
        }
    };

    render() {
        const { error } = this.state;

        return (
            <Dashboard title="Add new page">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label helper="required">Page name</Label>
                        <Input
                            type="text"
                            name="name"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Slug</Label>
                        <Input
                            type="text"
                            name="slug"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Title</Label>
                        <Input
                            type="text"
                            name="title"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Content</Label>
                        <Input
                            type="text"
                            name="content"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    {error && <Alert color="danger">error: {error}</Alert>}

                    <Button border="rounded">Add Page</Button>
                </Form>
            </Dashboard>
        );
    }
}

export default AddPage;
