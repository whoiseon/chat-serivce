import style from "../../../../css/pc/pc.module.scss";
import {useCallback, useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import useInput from "../../../../hooks/useInput";

const SearchModal = ({ setSearchModal }) => {
  const [keyword, onChangeKeyword, setKeyword] = useInput('');

  const searchInputRef = useRef();
  const router = useRouter();

  const onSubmitSearchForm = useCallback((e) => {
    e.preventDefault();

    router.push(`/search?keyword=${keyword}`);
  }, [router, keyword]);

  const onCloseSearchModal = useCallback(() => {
    setSearchModal(false);
  }, []);

  useEffect(() => {
    searchInputRef.current.focus();
  }, [searchInputRef]);

  return (
    <div className={style.searchModalBackground}>
      <div className={style.searchModalInner}>
        <div className={style.searchModalHeader}>
          <div className={style.logo}>
            <img src="/image/logo/white_logo.svg" alt="logo" />
            <p>MUCHAT</p>
          </div>
          <button type="button" onClick={onCloseSearchModal} className={style.closeBtn}>
            <img src="/image/icons/white_close_icon.svg" alt="close_icon" />
          </button>
        </div>
        <form className={style.searchInput} onSubmit={onSubmitSearchForm}>
          <input
            type="text"
            ref={searchInputRef}
            value={keyword}
            onChange={onChangeKeyword}
            placeholder="채팅방 이름을 검색해주세요"
          />
          <img src="/image/icons/search_icon.svg" alt="search_icon" />
        </form>
      </div>
    </div>
  );
};

export default SearchModal;
