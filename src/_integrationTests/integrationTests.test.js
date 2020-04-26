import moxios from "moxios";
import { testStore } from "../Utils";
import { fetchPosts } from "../actions";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "Example title 1",
        body: "Example title",
      },
      {
        title: "Example title 2",
        body: "Example title",
      },
      {
        title: "Example title 3",
        body: "Example title",
      },
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      console.log(newState);
      expect(newState.reducer).toBe(expectedState);
    });
  });
});
