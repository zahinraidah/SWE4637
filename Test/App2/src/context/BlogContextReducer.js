import React, { useReducer } from "react";

const BlogContextReducer = React.createContext();

const blogReducer = (state, action) => {
  switch(action.type){
    //add, edit, delete
    case 'add_blogPost':
      return [...state, {title: `BlogPost #${state.length + 1}`}]
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

const addBlogPost = () => {
  dispatch({type: 'add_blogPost'})
}

  return (
    <BlogContextReducer.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContextReducer.Provider>
  );
};

export default BlogContextReducer;
