import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { NavLink } from "react-router-dom";
import "./Menu.css";
export default class Menu extends Component {
  // state = {
  //   scroll: false
  // };
  // componentDidMount() {
  //   document.addEventListener("scroll", this.onScrolling);
  // }
  // onScrolling = () => {
  //   if (!this.state.scroll) this.setState({ scroll: true });
  //   if (window.pageYOffset === 0) {
  //     console.log("Scroll");
  //     this.setState({ scroll: false });
  //   }
  // };

  //  $(".dropdown-toggle").on("click", function() {
  //    if ($(".dropdown-menu").hasClass("show")) {
  //      $(".dropdown-menu").removeClass("show");
  //    } else {
  //      $(".dropdown-menu").addClass("show");
  //    }
  //  });

  render() {
    let classes = [
      "navbar",
      "navbar-expand-md",
      "navbar-dark",
      "menu",
      "shrink"
    ];

    // if (this.state.scroll) classes.push(" shrink");

    return (
      <header>
        <nav className={classes.join(" ")}>
          <div className="container">
            <a className="navbar-brand">
              Read<i>it</i>.
            </a>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link"
                    activeStyle={{ color: "yellow" }}
                    exact
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/About"
                    className="nav-link"
                    activeStyle={{ color: "yellow" }}
                  >
                    About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Blog"
                    className="nav-link"
                    activeStyle={{ color: "yellow" }}
                  >
                    Blog
                  </NavLink>
                </li>

                {/* <li class="nav-item">
                                <a class="nav-link" asp-area="" asp-controller="Admin" asp-action="CreatePost">AdminPanel</a>
                            </li>
                        
                        
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Manage
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" asp-controller="Administrator"
                                       asp-action="ListUsers">Users</a>
                                    <a class="dropdown-item" asp-controller="Administrator"
                                       asp-action="ListRoles">Roles</a>
                                </div>
                            </li>
                        }
                        
                            <li class="nav-item">
                                <a class="nav-link" asp-area="" asp-controller="Profile" asp-action="Show">Profile</a>
                            </li>
                     
                            <li class="nav-item">
                                <form method="post" asp-controller="Account" asp-action="logout">
                                    <button type="submit" style="width:auto"
                                            class="nav-link btn btn-link py-0">
                                        Logout @User.Identity.Name
                                    </button>
                                </form>
                            </li>
                        }
                        
                        
                            <li class="nav-item">
                                <a class="nav-link" asp-area="" asp-controller="Account" asp-action="Register">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" asp-controller="Account" asp-action="login">
                                    Login
                                </a>
                            </li>
                         */}
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className="banner">
          <div className="container">
            <div className="banner-text">
              <div className="col-md-12 ftco-animate">
                <h2 className="subheading">Hello! Welcome to</h2>
                <h1 className="banner-heading">Readit blog</h1>
              </div>
            </div>
          </div>
        </div> */}
      </header>
    );
  }
}
