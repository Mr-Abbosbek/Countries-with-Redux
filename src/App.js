import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PostServerApi from './API/PostServiceApi'
import Heder from "./Component/Heder";
import { useFetching } from "./Component/hooks/useFetching";
import SingleBlog from "./Component/SingleBlog";
import AllBlogList from "./Component/AllBlogList";
import { setCounter } from "./redux/actions/counterActions";

function App() {
  const dispatch = useDispatch();
  const [fetchPost]  = useFetching(async ()=>{
    const data = await PostServerApi.getAllPost()
          .catch((e)=>console.log("Error", e.message));
    dispatch(setCounter(data));
  });

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <BrowserRouter>
      <div className="header shadow-sm w-100 py-3 position-fixed">
        <Heder />
      </div>
      <div className="App">
        <Switch>
          <Route path="/" component={AllBlogList} exact />
          <Route path="/name/:name" component={SingleBlog} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
