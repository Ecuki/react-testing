import React from "react";
import { StyledPost } from "./styled";
import PropTypes from "prop-types";

const Post = ({ title, desc }) => {
  if (!title) {
    return null;
  }
  return (
    <StyledPost data-test="postComponent">
      <h2 data-test="titleComponent">{title}</h2>
      <p data-test="descComponent">{desc}</p>
    </StyledPost>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Post;
