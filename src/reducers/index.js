import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import postReducer from "./post.reducer";
import otherUserReducer from "./otherUser.reducer";
import followerFollowingListReducer from "./followerFollowingList.reducer";
import searchReducer from "./search.reducer";
import commentReducer from "./comment.reducer";
import storyReducer from "./story.reducer";
import chatReducer from "./chat.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  otherUser: otherUserReducer,
  followerFollowingList: followerFollowingListReducer,
  search: searchReducer,
  comment: commentReducer,
  story: storyReducer,
  chat:chatReducer,
});
export default rootReducer;
