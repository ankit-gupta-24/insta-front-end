import { postConstants } from "../actions/constants";

const initialState = {
  posts: [],
  savedPostsData: [],
  loading: false,
  err: null,
};

const removePost = (posts, postId) => {
  let newPosts = [];
  for (let i = 0; i < posts.length; ++i) {
    if (posts[i]._id !== postId) {
      newPosts.push(posts[i]);
    }
  }
  return newPosts;
};

const updatePostAfterLike = (posts, newPost) => {
  let newPosts = [];
  posts.forEach((post) => {
    if (post._id === newPost._id) {
      newPosts.push(newPost);
    } else {
      newPosts.push(post);
    }
  });
  return newPosts;
};

const updatePostAfterUnlike = (posts, postId, userId) => {
  for (let i = 0; i < posts.length; ++i) {
    if (posts[i]._id === postId) {
      let idx;
      for (let j = 0; j < posts[i].likedBy.length; ++j) {
        if (posts[i].likedBy[j].userId === userId) {
          idx = j;
          break;
        }
      }
      posts[i].likedBy.splice(idx, 1);
    }
  }
  return posts;
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case postConstants.GET_ALL_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };

      break;
    case postConstants.GET_ALL_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        posts: action.payload.posts,
      };

      break;
    case postConstants.GET_ALL_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;
    case postConstants.GET_MY_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };

      break;
    case postConstants.GET_MY_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        posts: action.payload.posts,
      };

      break;
    case postConstants.GET_MY_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };

      break;

    case postConstants.DELETE_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstants.DELETE_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        posts: removePost(state.posts, action.payload.postId),
      };
      break;
    case postConstants.DELETE_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;
    case postConstants.LIKE_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstants.LIKE_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        posts: updatePostAfterLike(state.posts, action.payload.post),
      };
      break;
    case postConstants.LIKE_POST_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case postConstants.UNLIKE_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstants.UNLIKE_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        posts: updatePostAfterUnlike(
          state.posts,
          action.payload.postId,
          action.payload.userId
        ),
      };
      break;
    case postConstants.UNLIKE_POST_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case postConstants.GET_SAVED_POSTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstants.GET_SAVED_POSTS_SUCCESS:
      state = {
        ...state,
        loading: false,
        savedPostsData: action.payload.savedPostsData,
      };
      break;
    case postConstants.GET_SAVED_POSTS_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;
    case postConstants.GET_FEATURED_POSTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };

      break;
    case postConstants.GET_FEATURED_POSTS_SUCCESS:
      state = {
        ...state,
        loading: false,
        posts: action.payload.posts,
      };

      break;
    case postConstants.GET_FEATURED_POSTS_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;
    default:
      break;
  }
  return state;
};

export default postReducer;
