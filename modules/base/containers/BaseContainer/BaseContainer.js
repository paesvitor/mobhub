import React from "react";
import { connect } from "react-redux";

// Styles
import "./BaseContainer.scss";

// Components
import BaseComponent from "../../components/Base";

// Actions
import { getBaseMessage } from "../../BaseActions";

// Maps
const mapDispatchToProps = dispatch => ({
    getBaseMessage: () => dispatch(getBaseMessage())
});

const BaseContainer = () => (
    <div>
        <BaseComponent />
    </div>
);

export default connect(
    null,
    mapDispatchToProps
)(BaseContainer);
