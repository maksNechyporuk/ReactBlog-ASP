import React, { Component } from "react";
import Blog from "../Blog/Blog.js";
import axios from "axios";
import { css } from "@emotion/core";
// First way to import
import { DotLoader } from "react-spinners";
const override = css`
  display: block;
  margin: 300px auto;
  border-color: green;
`;

export default class BlogList extends Component {
  state = {
    blog: [
      {
        id: "",
        Name: "",
        PrewText: "",
        Date: "",
        Img: ""
      }
    ],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios
        .get("http://localhost:56014/api/Blog/GetBlog")
        .then(response =>
          this.setState({ blog: response.data, loading: false })
        );
    });
  }
  render() {
    const { loading } = this.state;
    const posts = this.state.blog.map((post, index) => (
      <Blog key={post.id} post={post} />
    ));
    return (
      <div className="container">
        {loading ? (
          <div className="sweet-loading">
            <DotLoader
              css={override}
              sizeUnit={"px"}
              size={80}
              color={"#123abc"}
              loading={this.state.loading}
            />
          </div>
        ) : (
          <div className="row">{posts}</div>
        )}
      </div>
    );
  }
}
