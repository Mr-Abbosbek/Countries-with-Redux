import React, { Component } from "react";
// import AllCounter from "./AllCounter";
import SingleBlog from "./SingleBlog";
import AllBlogList from "./AllBlogList";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Heder from "./Heder";
import './../style/media.css';
import './../style/style.css';
import axios from "axios";

function SmallRouter() {

  return (
    <BrowserRouter>
      <div className="header shadow-sm w-100 py-3 position-fixed">
        <Heder />
      </div>
      <div className="App">
        <Switch>
          <Route path="/" component={AllBlog} exact />
          <Route path="/name/:name" component={Single} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


class AllBlog extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      const post = res.data;
      this.setState({ post });
      console.log(post);
    });
  }

  render() {
    return (
      <div>
        <AllBlogList post={this.state.post} key={this.state.post.id} />
      </div>
    )
  }
}

class Single extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      const post = res.data;
      this.setState({ post });
      console.log(post);
    });
  }

  render() {
    return (
      <div>
        <SingleBlog post={this.state.post} key={this.state.post.id} />
      </div>
    )
  }
}


export default SmallRouter;
