import style from "../../../../../css/pc/pc.module.scss";
import React from "react";

const ChatCurrentUser = () => {
  return (
    <>
      <div className={style.currentUserHeader}>
        <span>채팅중인 유저</span>
        <span>1 명</span>
      </div>
      <div className={style.currentUserList}>
        123
      </div>
    </>
  );
};

export default ChatCurrentUser;
