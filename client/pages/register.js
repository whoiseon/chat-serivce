import React from 'react';
import Head from 'next/head';
import RegisterForm from "../components/pc/RegisterForm";

const Login = () => {
  return (
    <>
      <Head>
        <title>Muchat - 회원가입</title>
      </Head>
      <RegisterForm />
    </>
  );
};

export default Login;
