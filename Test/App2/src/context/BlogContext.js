import createDataContext from './createDataContext';
import jsonserver from '../API/jsonserver';

const blogReducer = (state, action) => {
  switch(action.type){
    case 'get_blogPosts':
      return action.payload;
    case 'edit_blogPost':
      return state.map(post => {
        return (post.id === action.payload.id) ? action.payload : post;
      })
    case 'delete_blogPost':
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonserver.get('/blogposts');
    dispatch({ type: 'get_blogPosts', payload: response.data})
  }
}
 
const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonserver.post('/blogposts', {title, content});    
    if( callback ) callback();
  }
}

const deleteBlogPost = ( dispatch ) => {
  return async (id) => {
    await jsonserver.delete(`/blogposts/${id}`);
    dispatch({type: 'delete_blogPost', payload: id })
  }
}

const editBlogPost = ( dispatch ) => {
  return async (id, title, content, callback) => {
    await jsonserver.patch(`/blogposts/${id}`, {title, content})
    dispatch({type: 'edit_blogPost', payload: { id, title, content}})
    if( callback ) callback();
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer, 
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
  );