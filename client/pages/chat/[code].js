import React from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import AppLayout from "../../components/pc/AppLayout";

const ChatRoom = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Muchat - {router.query.code}</title>
      </Head>
      <AppLayout>
        {router.query.code}
      </AppLayout>
    </>
  );
};

export default ChatRoom;
