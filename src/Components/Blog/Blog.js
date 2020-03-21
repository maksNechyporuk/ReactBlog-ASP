import React, { Component } from "react";
import { render } from "react-dom";
import ImageBlog from "../ImageBlog/ImageBlog";
import BlogContent from "../BlogContent/BlogContent";
import "./Blog.css";

export default class Blog extends Component {
  render() {
    let { post } = this.props;
    return (
      <div className="col-lg-4 col-md-6">
        <div className="single-blog">
          <ImageBlog path={"http://localhost:56014/img/" + post.img} />
          <BlogContent post={post} />
        </div>
      </div>
    );
  }
}
