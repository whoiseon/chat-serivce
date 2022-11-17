import {useRouter} from "next/router";
import Head from "next/head";
import React from "react";
import IndexList from "../../components/pc/IndexList";

const Tag = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Muchat - {router.query.tag}</title>
      </Head>
      <IndexList />
    </>
  );
};

export default Tag;
