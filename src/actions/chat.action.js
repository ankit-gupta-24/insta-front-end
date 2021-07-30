import { socketEvents } from "../socket/constants";

export const getPreviousMessages = (socket) => {
  return async (dispatch) => {
    try {
      socket.emit("getPreviousMessages");
      socket.on("receivedPreviousMessages", (msgs) => {
        dispatch({
          type: socketEvents.RECEIVED_PREVIOUS_MESSAGES,
          payload: { msgs },
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const sendPrivateMessage = (socket, msg) => {
  return async (dispatch) => {
    try {
      socket.emit("privateMessage", { msg });
      socket.on("newMsg", (newMsg) => {
        dispatch({
          type: socketEvents.PRIVATE_MESSAGE_RECEIVED,
          payload: { newMsg },
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getPreviousMessegedUserList = (socket) => {
  return async (dispatch) => {
    try {
      await socket.emit("getPreviousMessegedUserList");
      await socket.on(
        "receivedPreviousMessegedUserList",
        (previousMessagedUserList) => {
          dispatch({
            type: socketEvents.RECEIVED_PREVIOUS_MESSAGED_USER_LIST,
            payload: { previousMessagedUserList },
          });
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
};

export const userSelect = (socket, username) => {
  return async (dispatch) => {
    try {
      socket.emit("userSelect", username);
      socket.on("userSelected", (anotherUser) => {
        socket.anotherUser = anotherUser;
        dispatch({
          type: socketEvents.USER_SELECTED,
          payload: { anotherUser },
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
};
