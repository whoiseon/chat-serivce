import style from "../../../css/pc/pc.module.scss";
import Link from "next/link";
import OpenedChatItem from "./Header/OpenedChatItem";
import React from "react";
import {useRouter} from "next/router";

const dummyData = [
  {
    title: '롤 듀오 모집방',
    code: 'exo31f',
  },
  {
    title: '서든어택 클원 구함',
    code: 'fei12d',
  }
];

const dummyUserInfo = {
  id: 1,
  nickname: '먹보',
  mucorn: '1001'
};

const AppLayout = ({ children }) => {
  const route = useRouter();

  const homeActive = !route.query.code ? style.active : '';

  return (
    <>
      <header className={ style.header }>
        <div className={ style.tabWrapper }>
          <div className={`${style.tabItem} ${homeActive}`}>
            <Link href="/">
              Muchat - 홈
            </Link>
          </div>
          {
            dummyData.map((chat) => {
              return (
                <OpenedChatItem
                  key={chat.code}
                  title={chat.title}
                  code={chat.code}
                />
              )
            })
          }
        </div>
        <div className={style.tabRight}>
          {
            !dummyUserInfo
              ? (
                <div className={style.userInfoWrapper}>
                  <div>
                    <img src={`/image/mucorn/${dummyUserInfo.mucorn}.png`} alt={`mucorn_${dummyUserInfo.mucorn}`} />
                    <span>{ dummyUserInfo.nickname } 님</span>
                  </div>
                </div>
              )
              : (
                  <Link href="/login">
                    로그인
                  </Link>
              )
          }
        </div>
      </header>

      <div className={style.container}>
        {children}
      </div>
    </>
  );
};

export default AppLayout;
