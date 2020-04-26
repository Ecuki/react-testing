import React from "react";
import Header from "./components/Header";
import Headline from "./components/Headline";
import "./App.css";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  margin: 20px auto;
  width: 100%;
  max-width: 980px;
  padding: 10px;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Section>
        <Headline header="Posts" desc="Click the button to render posts" />
      </Section>
    </div>
  );
}

export default App;
