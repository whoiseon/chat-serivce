import {useRouter} from "next/router";

const ChatRoom = () => {
  const router = useRouter();

  return (
    <div>
      { router.query.code }
    </div>
  );
};

export default ChatRoom;
