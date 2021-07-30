import { socketEvents } from "../socket/constants";

const initialState = {
  activeUser: {},
  previousMessagedUserList: [],
  allMessages: [],
};

const updateMsgs = (msgs, newMsg) => {
  let updatedMsgs = [];
  msgs.push(newMsg);
  let count = 0;
  for (let msg of msgs) {
    if (msg._id !== newMsg._id) {
      updatedMsgs.push(msg);
    } else if (count === 0) {
      updatedMsgs.push(msg);
      count++;
    }
  }
  return updatedMsgs;
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case socketEvents.USER_SELECTED:
      state = {
        ...state,
        activeUser: action.payload.anotherUser,
      };
      break;
    case socketEvents.PRIVATE_MESSAGE_RECEIVED:
      state = {
        ...state,
        // allMessages: [...state.allMessages, action.payload.newMsg],
        allMessages: updateMsgs(state.allMessages, action.payload.newMsg),
      };
      break;
    case socketEvents.RECEIVED_PREVIOUS_MESSAGED_USER_LIST:
      state = {
        ...state,
        previousMessagedUserList: action.payload.previousMessagedUserList,
      };
      break;
    case socketEvents.RECEIVED_PREVIOUS_MESSAGES:
      state = {
        ...state,
        allMessages: action.payload.msgs,
      };
      break;
    default:
      break;
  }
  return state;
};

export default chatReducer;
