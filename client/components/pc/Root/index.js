import React from "react";
import {useRouter} from "next/router";
import AppLayout from "../AppLayout";

const Index = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname === '/login' || router.pathname === '/register' ?
        <Component Component={Component} pageProps={pageProps} />
        :
        <AppLayout>
          <Component Component={Component} pageProps={pageProps} />
        </AppLayout>
      }

    </>
  );
};

export default Index;
