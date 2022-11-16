import React from 'react';
import style from '../css/pc/pc.module.scss';
import Head from 'next/head';
import LoginForm from "../components/pc/LoginForm";

const Login = () => {
  return (
    <>
      <Head>
        <title>Muchat - 홈</title>
      </Head>
      <LoginForm />
    </>
  );
};

export default Login;
