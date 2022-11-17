import Link from "next/link";
import React, {useCallback} from "react";
import style from "../../../../../css/pc/pc.module.scss";
import {useRouter} from "next/router";

const OpenedChatItem = ({ title, code }) => {
  const router = useRouter();
  const home = code === '/'
  const active = router.query.code === code ? style.active : '';

  return (
    <div className={`${style.tabItem} ${active}`}>
      <Link href={home ? '/' : `/chat/${code}`}>
        { title }
      </Link>
    </div>
  );
};

export default OpenedChatItem;
