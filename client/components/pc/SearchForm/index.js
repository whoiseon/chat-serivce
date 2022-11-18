import {useRouter} from "next/router";
import style from '../../../css/pc/pc.module.scss';
import {useCallback, useEffect, useState} from "react";
import useInput from "../../../hooks/useInput";
import ChatCard from "../IndexList/ChatCard";

const dummyChatData = [
  {
    title: '롤 듀오 모집방',
    code: 'exo31f',
    tag: '자유',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    manager: {
      nickname: '먹보',
      mucorn: '1001',
    }
  },
  {
    title: '서든어택 클원 구함',
    code: 'd3xded',
    tag: '친목',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    manager: {
      nickname: '강동원',
      mucorn: '1001',
    }
  },
  {
    title: '서든어택 클원 구함',
    code: 'ff12dx',
    tag: '게임',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley ',
    manager: {
      nickname: '강동원',
      mucorn: '1001',
    }
  },
  {
    title: '서든어택 클원 구함',
    code: 'ec32dx',
    tag: '공부',
    description: 'Lorem Ipsum has been the industry',
    manager: {
      nickname: '강동원',
      mucorn: '1001',
    }
  },
  {
    title: '서든어택 클원',
    code: 'as213d',
    tag: '만화',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500',
    manager: {
      nickname: '강동원',
      mucorn: '1001',
    }
  },
  {
    title: '롤토체스 하실분 구합니다 다이아 이상 더블업 가능',
    code: 'oope3d',
    tag: '일상',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    manager: {
      nickname: '소지섭',
      mucorn: '1001',
    }
  }
];

const SearchForm = () => {
  const router = useRouter();

  const [keyword, onChangeKeyword, setKeyword] = useInput('');

  const onSubmitSearch = useCallback((e) => {
    e.preventDefault();

    router.push(`/search?keyword=${keyword}`);
  }, [keyword]);

  useEffect(() => {
    setKeyword(router.query.keyword)
  }, [router.query.keyword]);

  return (
    <div className={style.inner}>
      <div className={style.searchWrapper}>
        <form className={style.searchHeader} onSubmit={onSubmitSearch}>
          <input type="text"
            value={keyword || ''}
            onChange={onChangeKeyword}
          />
          <img src="/image/icons/search_icon.svg" alt="search_icon" />
          <p><i>{router.query.keyword}</i>에 대한 검색결과</p>
        </form>
        <div className={style.indexWrapper}>
          <div className={style.chatListWrapper}>
            <div className={style.chatListBox}>
              <div className={style.chatListInner}>
                {
                  dummyChatData.map((chat) => {
                    return <ChatCard key={chat.code} chat={chat} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
