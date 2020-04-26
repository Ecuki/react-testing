import React from "react";

import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "./Utils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();

  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          id: 1,
          title: "Example title 1",
          body: "Example title",
        },
        {
          id: 2,
          title: "Example title 2",
          body: "Example title",
        },
        {
          id: 3,
          title: "Example title 3",
          body: "Example title",
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "appComponent");

    expect(component.length).toBe(1);
  });
});
