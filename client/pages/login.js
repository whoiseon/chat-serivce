import React from 'react';
import Head from 'next/head';
import LoginForm from "../components/pc/LoginForm";

const Login = () => {
  return (
    <>
      <Head>
        <title>Muchat - 로그인</title>
      </Head>
      <LoginForm />
    </>
  );
};

export default Login;
