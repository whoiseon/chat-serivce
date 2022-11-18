import style from "../../../../css/pc/pc.module.scss";
import React from "react";
import ChatCurrentUser from "./ChatCurrentUser";

const dummyChatData = [
  {
    userInfo: {
      nickname: '먹보',
      mucorn: '1001',
    },
    content: '안녕하세요',
    time: new Date()
  },
  {
    userInfo: {
      nickname: '강동원',
      mucorn: '1001',
    },
    content: 'ㅎㅇㅎㅇ',
    time: new Date()
  },
  {
    userInfo: {
      nickname: '소지섭',
      mucorn: '1001',
    },
    content: 'ㅋㅋㅋㅋ네 반가워요',
    time: new Date()
  },
]

const ChatIndex = () => {
  return (
    <>
      <div className={style.chatFormWrapper}>
        <div className={style.chatFormHeader}>
          <p>어서 오세요, 오픈 채팅 플랫폼 먹챗 입니다.</p>
        </div>
        <ul className={style.chatMessageWrapper}>
          {
            dummyChatData.map((chat) => {
              return (
                <li key={chat.content.body} className={style.messageItem}>
                  <div className={style.messageUserInfo}>
                    <img src={`/image/mucorn/${chat.userInfo.mucorn}.png`} alt={`${chat.userInfo.mucorn}.png`} />
                    <span>{chat.userInfo.nickname}</span>
                  </div>
                  <div className={style.messageContent}>
                    <p>{ chat.content }</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className={style.chatCurrentUserWrapper}>
        <ChatCurrentUser />
      </div>
    </>
  );
};

export default ChatIndex;
