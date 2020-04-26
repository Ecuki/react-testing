import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";
import { findByTestAtrr, checkProps } from "../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            name: "Test name",
            lastName: "Test lastname",
            email: "Test email",
            age: 23,
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });
    it("Should render a H1", () => {
      const component = findByTestAtrr(wrapper, "header");
      expect(component.length).toBe(1);
    });
    it("Should render a desc", () => {
      const component = findByTestAtrr(wrapper, "desc");
      expect(component.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
