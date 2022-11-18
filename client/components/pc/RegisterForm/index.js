import {useState} from "react";
import Link from "next/link";
import style from "../../../css/pc/pc.module.scss";
import useInput from "../../../hooks/useInput";

const emailCheck = (email) => {
  const reg = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/i;
  return reg.test(email);
};

const RegisterForm = () => {
  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck, setPasswordCheck] = useInput('');

  return (
    <div className={style.background}>
      <div className={style.loginWrapper}>
        <div className={style.loginInner}>
          <div className={style.logo}>
            <Link href="/">
              <img src="/image/logo/main_logo.svg" alt="Logo" />
            </Link>
            <h1>회원가입</h1>
          </div>
          <div className={style.loginInput}>
            <p>이메일</p>
            <input type="text" value={email} onChange={onChangeEmail} />
          </div>
          <div className={style.loginInput}>
            <p>닉네임</p>
            <input type="text" value={nickname} onChange={onChangeNickname} />
          </div>
          <div className={style.loginInput}>
            <p>비밀번호</p>
            <input type="password" value={password} onChange={onChangePassword} />
          </div>
          <div className={style.loginInput}>
            <p>비밀번호 확인</p>
            <input type="password" value={passwordCheck} onChange={onChangePasswordCheck} />
          </div>
          <button type="button">
            회원가입
          </button>
          <p>
            이미 회원이신가요?
            <Link href="/login">
              로그인 할래요
            </Link>
          </p>
        </div>
        </div>
    </div>
  );
};

export default RegisterForm;
