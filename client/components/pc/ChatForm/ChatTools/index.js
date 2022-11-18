import style from "../../../../css/pc/pc.module.scss";
import React from "react";

const ChatTools = () => {
  return (
    <div className={style.chatToolsWrapper}>
      <div className={style.chatToolFontSize}>
        <span>크기</span>
        <select defaultValue="14px">
          <option value="12px">12pt</option>
          <option value="14px">14pt</option>
          <option value="16px">16pt</option>
          <option value="18px">18pt</option>
          <option value="19px">20pt</option>
        </select>
      </div>
      <div className={style.colorPicker}>
        <span>색상</span>
        <input type="color" />
      </div>
      <div className={style.colorPicker}>
        <span>배경</span>
        <input type="color" defaultValue="#FFFFFF" />
      </div>
      <div className={style.fontStyleChange}>
        <button type="button" className={style.fontStyleBold}>가</button>
      </div>
      <div className={style.fontStyleChange}>
        <button type="button" className={style.fontStyleUnderline}>가</button>
      </div>
    </div>
  );
};

export default ChatTools;
