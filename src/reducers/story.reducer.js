import { storyConstants } from "../actions/constants";

const initialState = {
  storyList: [],
  err: null,
  loading: false,
};

const updateStoryList = (storyList, payload) => {
  let newStoryList = [];
  const { userId, storyId } = payload;
  
  for (let i = 0; i < storyList.length; i++) {
    if (storyList[i]._id === storyId) {
      let story = {
        ...storyList[i],
        // eslint-disable-next-line
        ["seenBy"]: [...storyList[i].seenBy, userId],
      };
      newStoryList.push(story);
    } else {
      newStoryList.push(storyList[i]);
    }
  }
  return newStoryList;
};

const removeStory = (storyList, storyId) => {
  let newStoryList = [];

  for (let i = 0; i < storyList.length; i++) {
    if (storyList[i]._id !== storyId) {
      newStoryList.push(storyList[i]);
    }
  }
  return newStoryList;
};

export const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case storyConstants.GET_STORYLIST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case storyConstants.GET_STORYLIST_SUCCESS:
      state = {
        ...state,
        loading: false,
        storyList: action.payload.storyList,
      };
      break;
    case storyConstants.GET_STORYLIST_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;

    case storyConstants.CREATE_STORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case storyConstants.CREATE_STORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        storyList: [action.payload.story, ...state.storyList],
      };
      break;
    case storyConstants.CREATE_STORY_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;

    case storyConstants.INC_STORY_VIEW_COUNT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case storyConstants.INC_STORY_VIEW_COUNT_SUCCESS:
      state = {
        ...state,
        loading: false,
        storyList: updateStoryList(state.storyList, action.payload),
      };
      break;
    case storyConstants.INC_STORY_VIEW_COUNT_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;

    case storyConstants.GET_ARCHIVES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case storyConstants.GET_ARCHIVES_SUCCESS:
      state = {
        ...state,
        loading: false,
        storyList: action.payload.storyList,
      };
      break;
    case storyConstants.GET_ARCHIVES_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;

    case storyConstants.DELETE_ARCHIVE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case storyConstants.DELETE_ARCHIVE_SUCCESS:
      state = {
        ...state,
        loading: false,
        storyList: removeStory(state.storyList, action.payload.storyId),
      };
      break;
    case storyConstants.DELETE_ARCHIVE_FAILURE:
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

export default storyReducer;
