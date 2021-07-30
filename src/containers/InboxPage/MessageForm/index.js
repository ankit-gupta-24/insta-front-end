import React, { useEffect, useRef, useState } from "react";
import { MdSend } from "react-icons/md";
import { generatPublicURL } from "../../../urlConfig";
import { useDispatch, useSelector } from "react-redux";
import { getPreviousMessages, sendPrivateMessage } from "../../../actions";

function MessageForm({ socket }) {
  const chat = useSelector((state) => state.chat);
  const [message, setMessage] = useState("");
  const msgRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(chat.activeUser).length)
      dispatch(getPreviousMessages(socket));
  }, [chat.activeUser,dispatch,socket]);

  useEffect(() => {
    if (msgRef) {
      msgRef.current.addEventListener("DOMNodeInserted", (e) => {
        const { currentTarget: target } = e;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  return (
    <>
      <div className="messageAreaHeader">
        <div className="imgWrapper">
          <img src={generatPublicURL(chat.activeUser.profilePic)} alt="my" />
        </div>
        <div>{chat.activeUser.username || "username"}</div>
      </div>
      <div className="allMessages" ref={msgRef}>
        <ul >
          {chat.allMessages &&
            chat.allMessages.map((msg) => {
              let stime = "";
              const d = new Date(msg.createdAt);
              stime = `${
                d.getHours() > 12 ? d.getHours() - 12 : d.getHours()
              }:${d.getMinutes()} ${
                d.getHours() >= 12 && d.getMinutes() > 0 ? " PM" : " AM"
              }`;
              return (
                <li key={msg._id}>
                  <span
                    className={
                      msg.sender === chat.activeUser._id
                        ? "msg receivedMsg"
                        : "msg sendMsg"
                    }
                  >
                    {" "}
                    {msg.description} &nbsp;&nbsp;&nbsp;
                    <small style={{ fontSize: "0.65rem" }}>{stime}</small>
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="messageInput">
        <span style={{ fontSize: "1.4rem" }}>&#127773;</span>
        <input
          type="text"
          value={message}
          placeholder="Message..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <MdSend
          style={{ fontSize: "1.4rem" }}
          onClick={() => {
            dispatch(sendPrivateMessage(socket, message));
            setMessage("");
          }}
        />
      </div>
    </>
  );
}

export default MessageForm;
