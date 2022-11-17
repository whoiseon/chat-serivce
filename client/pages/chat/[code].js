import React from "react";
import {useRouter} from "next/router";
import Head from "next/head";

const ChatRoom = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Muchat - 채팅</title>
      </Head>
      {router.query.code}
    </>
  );
};

export default ChatRoom;
