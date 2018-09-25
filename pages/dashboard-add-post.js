import React from "react";
import Dashboard from "templates/dashboard";
import { FormGroup, Input, Label, Form, Button, Alert } from "sagan-ui";
import Swal from "sweetalert2";
import { Router } from "../routes";
import RichTextEditor from "react-rte";
import { createPost } from "modules/post/PostActions";

class DashboardAddPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            loadingRequest: false,
            editorContent: RichTextEditor.createEmptyValue()
        };
    }

    handleInputChange = e => {
        const {
            target: { value, name }
        } = e;
        const errorField = `${name}Error`;
        this.setState({ [name]: value, [errorField]: null });
    };

    handleEditorChange = editorContent => {
        this.setState({ editorContent });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ error: null, loadingRequest: true });
        const { title, slug, thumbnail, editorContent } = this.state;
        const content = editorContent.value.toString("html");
        const post = { title, slug, thumbnail, content };

        try {
            createPost(post) &&
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
                          autoComplete="off"
                          type="text"
                          name="title"
                            onChange={this.handleInputChange}
                            error={this.state.titleError}
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
                    error={this.state.slugError}
                  />
                    </FormGroup>

                    <FormGroup>
                    <Label helper="Paste an image URL">Thumbnail</Label>
                        <Input
                            autoComplete="off"
                        type="text"
                        name="thumbnail"
                        onChange={this.handleInputChange}
                        error={this.state.thumbnailError}
                      />
                  </FormGroup>

                    <FormGroup>
                        <RichTextEditor
                            value={this.state.value}
                            onChange={this.handleEditorChange}
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
