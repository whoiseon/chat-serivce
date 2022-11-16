import React from 'react';
import style from '../css/pc/pc.module.scss';
import Head from 'next/head';
import ChatList from "../components/pc/ChatList";
import AppLayout from "../components/pc/AppLayout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Muchat - 홈</title>
      </Head>
      <AppLayout>
        <div className={style.inner}>
          <ChatList />
        </div>
      </AppLayout>
    </>
  );
};

export default Home;
