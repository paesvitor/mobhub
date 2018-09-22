import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Base extends PureComponent {
    render() {
        const { data } = this.props;

        return (
            <div>
                Base Componenteee
                <p>{data.name}</p>
            </div>
        );
    }
}

Base.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string
    })
};

Base.defaultProps = {
    data: {
        name: "Atomic Koala Boilerplate"
    }
};

export default Base;
