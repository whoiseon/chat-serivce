import style from '../../../../css/pc/pc.module.scss';

const ChatCard = ({ chat }) => {
  return (
    <div className={style.chatCard}>
      { chat.title }
    </div>
  );
};

export default ChatCard;
