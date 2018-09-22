import React from "react";
import renderer from "react-test-renderer";

// Tested Componentd
import Base from "./Base";

describe("Render Component Correctly", () => {
    it("Renders Correctly", () => {
        const rendered = renderer.create(<Base />).toJSON();
        expect(rendered).toBeTruthy();
    });
});
