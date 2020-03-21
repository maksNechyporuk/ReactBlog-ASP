import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import "./Post.css";
import axios from "axios";
import { css } from "@emotion/core";
// First way to import
import { DotLoader } from "react-spinners";
const override = css`
  display: block;
  margin: 300px auto;
  border-color: green;
`;

export default class Post extends Component {
  state = {
    post: {
      Name: "",
      FullText: "",
      Date: "",
      Img: ""
    },
    loading: false
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    this.setState({ loading: true }, () => {
      axios
        .get("http://localhost:56014/api/Blog/GetPostById?id=" + id)
        .then(response =>
          this.setState({ post: response.data, loading: false })
        );
    });
  }

  render() {
    let { post } = this.state;
    console.log(this.state);
    return (
      <div className="container">
        <div className="well">
          <div className="row">
            <div className="col-md-12">
              <div className="row hidden-md hidden-lg"></div>

              <div className="pull-left col-md-4 col-xs-12 thumb-contenido">
                <img
                  className="center-block img-responsive"
                  src={"http://localhost:56014/img/" + post.img}
                />
              </div>
              <div className="">
                <h1 className="hidden-xs hidden-sm">{post.name}</h1>
                <hr />
                <small>{post.date}</small>
                <br />
                <small>
                  <strong>{post.author}</strong>
                </small>
                <hr />
                <p className="text-justify">{post.fullText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
