import style from '../../../css/pc/pc.module.scss';
import Link from "next/link";
import useInput from "../../../hooks/useInput";
import {useRef} from "react";
import Button from "../../common/Button";

const LoginForm = () => {
  const emailRef = useRef();

  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');

  return (
    <div className={style.background}>
      <div className={style.loginWrapper}>
        <div className={style.logo}>
          <Link href="/">
            <img src="/image/logo/gray_logo.svg" alt="Logo" />
          </Link>
          <h1>로그인</h1>
        </div>
        <div className={style.loginInput}>
          <p>이메일</p>
          <input type="text" ref={emailRef} value={email} onChange={onChangeEmail} />
        </div>
        <div className={style.loginInput}>
          <p>비밀번호</p>
          <input type="password" value={password} onChange={onChangePassword} />
        </div>
        <Button>
          로그인
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
