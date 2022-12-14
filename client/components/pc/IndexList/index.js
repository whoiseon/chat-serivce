import style from '../../../css/pc/pc.module.scss';
import TagList from "./TagList";
import ChatCard from "./ChatCard";
import SearchModal from "./SearchModal";
import {useCallback, useState} from "react";

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

const ChatList = () => {
  const [searchModal, setSearchModal] = useState(false);

  const showSearchModal = useCallback(() => {
    setSearchModal((prev) => !prev);
  }, []);

  return (
    <div className={style.inner}>
      <div className={style.indexWrapper}>
        <div className={style.indexTop}>
          <TagList />
          <div className={style.topRight}>
            <div className={style.createChatWrapper}>
              <button className={style.searchBtn} onClick={showSearchModal}>
                <img src="image/icons/search_icon.svg" alt="search_icon"/>
              </button>
              <button type="button" className={style.createChatBtn}>
                <img src="image/icons/add_plus_icon.svg" alt="add_plus_icon"/>
              </button>
            </div>
          </div>
        </div>
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
      {searchModal && <SearchModal setSearchModal={setSearchModal} />}
    </div>
  );
};

export default ChatList;
