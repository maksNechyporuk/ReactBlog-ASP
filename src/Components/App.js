import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import { render } from "react-dom";
import { Route } from "react-router-dom";
import Blog from "./Blog/Blog";
import Menu from "../Components/Header/Menu";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Post from "../Components/Post/Post";
import BlogList from "./BlogList/BlogList";
import Input from "./Input/Input";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Route path="/" exact component={Home}></Route>
        <Route path="/About" exact component={About}></Route>
        <Route path="/Blog" exact component={BlogList}></Route>
        <Route path="/Blog/GetPostById/:id" component={Post}></Route>
      </div>
    );
  }
}
