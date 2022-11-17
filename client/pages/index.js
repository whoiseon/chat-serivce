import React from 'react';
import style from '../css/pc/pc.module.scss';
import Head from 'next/head';
import IndexList from "../components/pc/IndexList";

const Home = () => {
  return (
    <>
      <Head>
        <title>Muchat - 홈</title>
      </Head>
      <IndexList />
    </>
  );
};

export default Home;
