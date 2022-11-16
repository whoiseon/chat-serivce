import React from "react";
import style from '../../../css/pc/pc.module.scss';
import OpenedChatItem from "./Header/openedChatItem";
import Link from "next/link";
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
]

const Index = ({ Component, pageProps }) => {
  const route = useRouter();

  const homeActive = route.pathname === '/' ? style.active : '';

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
          <Link href="/">
            로그인
          </Link>
        </div>
      </header>

      <div className={style.container}>
        <Component Component={Component} pageProps={pageProps} />
      </div>

      <footer className={style.footer}>
        MUCHAT 먹챗 | Copyright 2022. MUCHAT all rights reserved.
      </footer>
    </>
  );
};

export default Index;
