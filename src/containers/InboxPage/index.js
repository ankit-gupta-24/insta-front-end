import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import PreviosMessagedUsers from "./PreviousMessagedUser";
import MessageForm from "./MessageForm";
import socket from "../../socket";
import { useSelector, useDispatch } from "react-redux";
import { getPreviousMessegedUserList } from "../../actions";
import "./style.css";

function InboxPage(props) {
  const auth = useSelector((state) => state.auth);
  const chat = useSelector((state) => state.chat);

  const dispatch = useDispatch();

  useEffect(() => {
    socket.user = {
      _id: auth.user._id,
      username: auth.user.username,
      profilePic: auth.user.profilePic,
    };
    socket.emit("userConnected", socket.user);
  }, [auth.user._id,auth.user.username,auth.user.profilePic]);

  useEffect(() => {
    dispatch(getPreviousMessegedUserList(socket));
  }, [dispatch]);

  return (
    <Layout>
      <div className="inboxPage">
        <div className="content">
          <div className="userListArea">
            <div className="userListHeader">Inbox</div>
            <div className="listContent">
              {chat.previousMessagedUserList &&
                chat.previousMessagedUserList.map((_user) => {
                  return (
                    <PreviosMessagedUsers
                      key={_user._id}
                      user={_user}
                      socket={socket}
                    />
                  );
                })}
            </div>
          </div>
          <div
            className={
              Object.keys(chat.activeUser).length
                ? "messageArea"
                : "defaultPageForMessage"
            }
          >
            {Object.keys(chat.activeUser).length ? (
              <MessageForm socket={socket} />
            ) : (
              <div>
                <h2>Your Messages</h2>
                <p>Send private messages to a friend.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default InboxPage;
