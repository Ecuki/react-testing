import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Header from "./components/Header";
import Headline from "./components/Headline";
import Button from "./components/Button";
import Post from "./components/Post";
import "./App.css";
import { fetchPosts } from "./actions";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 100%;
  max-width: 980px;
  padding: 10px;
`;

const tempArr = [
  {
    name: "Joe",
    lastName: "Joe",
    email: "joe@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];

function App({ fetchPosts, posts }) {
  const fetch = () => {
    fetchPosts();
  };

  const configButton = {
    buttonText: "Get posts",
    emitEvent: fetch,
  };

  return (
    <div className="App">
      <Header />
      <Section>
        <Headline
          header="Posts"
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
        <Button {...configButton} />
        {posts.length > 0 && (
          <div>
            {posts.map((post) => {
              const { title, body } = post;
              const postConfig = {
                title,
                desc: body,
              };
              return <Post key={post.id} {...postConfig} />;
            })}
          </div>
        )}
      </Section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.reducer,
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
