import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { NavLink } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";

import "./BlogContent.css";
class BlogContent extends Component {
  render() {
    let { post } = this.props;
    let id = post.id;
    console.log(id);
    return (
      <div className="blog-content">
        <div className="blog-title">
          <h4>
            <a>{post.name}</a>
          </h4>
          <div className="meta">{post.date}</div>
        </div>
        <p>{post.prewText}</p>
        <NavLink
          to={{
            pathname: "/Blog/GetPostById/" + id
          }}
          className="btn btn-primary blog_buttons"
        >
          Read more
        </NavLink>
        <NavLink to="/Blog/Post/Edit" className="btn-warning btn blog_buttons">
          Edit
        </NavLink>

        <NavLink to="/Blog/Post/Delete" className="btn btn-danger blog_buttons">
          Delete
        </NavLink>
      </div>
    );
  }
}
export default withRouter(BlogContent);
