import style from '../../../../css/pc/pc.module.scss';
import Link from "next/link";
import React from "react";

const ChatCard = ({ chat }) => {
  return (
    <Link className={style.chatCard} href={`/chat/${chat.code}`}>
      <div className={style.chatInfo}>
        <div className={style.chatTag}>
          { chat.tag }
        </div>
        <div className={style.chatTitle}>
          <h1>{ chat.title }</h1>
        </div>
        <div className={style.description}>
          <p>{ chat.description }</p>
        </div>
      </div>
      <div className={style.chatManager}>
        <div className={style.managerInfo}>
          <img src={`/image/mucorn/${chat.manager.mucorn}.png`} alt={`mucorn_${chat.manager.mucorn}`} />
          <span>{ chat.manager.nickname }</span>
        </div>
        <div className={style.currentUser}>
          <img src="/image/icons/current_user_icon.svg" alt="current_user_icon" />
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default ChatCard;
