import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import Blogs from "./Blogs";
import FormList from "./FormList";

function AllBlogs() {

  const post = useSelector(state => state.allCounters.counter);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [select, setSelect] = useState({option: ""});

  const selectRegion = useMemo(() => {
      if (select.option.length) {
      setFilter({query: "" })
      const newItem = [...post].filter((item) => item.region === select.option);
      return newItem;
    }
    return post;
  }, [select.option, post]);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...post].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return post;
  }, [filter.sort, post]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((res) =>
      res.name.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);



  return (
    <div>
      <FormList filter={filter} setFilter={setFilter} select={select} setSelect={setSelect} />
       
        {
          (filter.query)
          ? <Blogs posts={sortedAndSearchPosts} /> :
          (select.option)
          ? <Blogs posts={selectRegion}   />
          : <Blogs posts={post} />
        }
        
    </div>
  );
}

export default AllBlogs;
