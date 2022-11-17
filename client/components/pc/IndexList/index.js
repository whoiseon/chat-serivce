import style from '../../../css/pc/pc.module.scss';
import TagList from "./TagList";
import ChatCard from "./ChatCard";

const dummyChatData = [
  {
    title: '롤 듀오 모집방',
    code: 'exo31f',
    manager: {
      nickname: '먹보',
      mucorn: '1001',
    }
  },
  {
    title: '서든어택 클원 구함',
    code: 'fei12d',
    manager: {
      nickname: '강동원',
      mucorn: '1001',
    }
  },
  {
    title: '서든어택 클원 구함',
    code: 'fei12d',
    manager: {
      nickname: '강동원',
      mucorn: '1001',
    }
  },
  {
    title: '서든어택 클원 구함',
    code: 'fei12d',
    manager: {
      nickname: '강동원',
      mucorn: '1001',
    }
  },
  {
    title: '서든어택 클원 구함',
    code: 'fei12d',
    manager: {
      nickname: '강동원',
      mucorn: '1001',
    }
  },
  {
    title: '롤체 하실분',
    code: 'f3ik2e',
    manager: {
      nickname: '소지섭',
      mucorn: '1001',
    }
  }
];

const ChatList = () => {
  return (
    <div className={style.inner}>
      <div className={style.indexTop}>
        <TagList />
        <div className={style.topRight}>
          123
        </div>
      </div>
      <div className={style.chatListWrapper}>
        {
          dummyChatData.map((chat) => {
            return <ChatCard chat={chat} />
          })
        }
      </div>
    </div>
  );
};

export default ChatList;
