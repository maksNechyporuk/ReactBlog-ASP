import React, { Component } from "react";
import { render } from "react-dom";
import "./ImageBlog.css";
export default class ImageBlog extends Component {
  render() {
    let path = this.props.path;
    return (
      <div className="blog-img">
        <img src={path} alt="blog image" />
      </div>
    );
  }
}
