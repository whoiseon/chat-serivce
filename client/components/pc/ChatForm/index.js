import React from "react";
import style from '../../../css/pc/pc.module.scss';
import ChatSendForm from "./ChatSendForm";
import ChatIndex from "./ChatIndex";

const ChatForm = () => {
  return (
    <div className={style.inner}>
      <div className={style.chatWrapper}>
        <div className={style.chatHeader}>
          <div className={style.chatTitle}>
            <div className={style.chatTag}>
              게임
            </div>
            <h1>롤 듀오 모집방</h1>
          </div>
        </div>
        <div className={style.chatIndex}>
          <ChatIndex />
        </div>
        <div className={style.chatSendForm}>
          <ChatSendForm />
        </div>
      </div>
    </div>
  );
};

export default ChatForm;
