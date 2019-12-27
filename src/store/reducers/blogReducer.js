const initialState = []

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return state.concat([action.payload]); // add new post in state array
    case "DELETE_POST":
      return state.filter(post => post.id !== action.id);
      // keep all the posts that is not equals to id that was dispatched
    case "UPDATE":
      return state.map(post => {
        if (post.id === action.id) { 
          //get an id and check for a match in the array of posts then update that post which was matched
          return {
            ...post,
            title: action.payload.title,
            author: action.payload.author,
            message: action.payload.message,
            image: action.payload.image,
          };
        } else return post;
      });
    default:
      return state;
  }
};
export default BlogReducer;
