import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import AddBlog from "./AddBlog";
import BlogList from "./BlogList";
import ViewBlog from "./ViewBlog";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Route path="/" component={Home} />
          <Route path="/AddBlog" component={AddBlog} />
          <Route path="/BlogList" component={BlogList} />
          <Route path="/ViewBlog" component={ViewBlog} />
      </div>
      </BrowserRouter>
    );
  }
}
export default Main;
