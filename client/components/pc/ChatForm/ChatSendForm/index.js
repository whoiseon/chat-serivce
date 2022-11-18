import React, {memo} from "react";
import style from "../../../../css/pc/pc.module.scss";
import ChatTools from "../ChatTools";

const ChatSendForm = () => {
  return (
    <div className={style.chatSendWrapper}>
      <div className={style.inputWrapper}>
        <div className={style.chatSendInput}>
          <textarea />
          <button type="button">전송</button>
        </div>
      </div>
    </div>
  );
};

export default memo(ChatSendForm);
