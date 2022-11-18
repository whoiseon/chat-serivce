import React from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import ChatForm from "../../components/pc/ChatForm";

const ChatRoom = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Muchat - 채팅</title>
      </Head>
      <ChatForm />
    </>
  );
};

export default ChatRoom;
