import React from 'react';
import style from '../css/pc/pc.module.scss';
import Head from 'next/head';
import ChatList from "../components/pc/ChatList";

const Home = () => {
  return (
    <>
      <Head>
        <title>Muchat - 홈</title>
      </Head>
      <div className={style.inner}>
        <ChatList />
      </div>
    </>
  );
};

export default Home;
