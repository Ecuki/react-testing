import React from "react";
import { shallow } from "enzyme";
import Post from "./Post";
import { findByTestAtrr, checkProps } from "../../Utils/index";

describe("Post Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        title: "Example title",
        desc: "Example desc",
      };
      const propsError = checkProps(Post, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = { title: "Example title", desc: "Example desc" };
      wrapper = shallow(<Post {...props} />);
    });

    it("Should Render a post", () => {
      const post = findByTestAtrr(wrapper, "postComponent");
      expect(post.length).toBe(1);
    });

    it("Should Render a title", () => {
      const title = findByTestAtrr(wrapper, "titleComponent");
      expect(title.length).toBe(1);
    });

    it("Should Render a desc", () => {
      const desc = findByTestAtrr(wrapper, "descComponent");
      expect(desc.length).toBe(1);
    });
  });

  describe("Should NOT render", () => {
    let wrapper;
    beforeEach(() => {
      const props = { desc: "Example desc" };
      wrapper = shallow(<Post {...props} />);
    });

    it("Component is not rendered", () => {
      const component = findByTestAtrr(wrapper, "postComponent");
      expect(component.length).toBe(0);
    });
  });
});
