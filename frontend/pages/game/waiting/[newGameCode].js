import { useRouter } from 'next/router';
import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  initializeSocket,
  joinGameRoom,
  onNewMessage,
  onNewUser,
} from '@/services/socketServices';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // false or 'blocking'
  };
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}
const NewGame = () => {
  const { query } = useRouter();
  const { newGameCode } = query;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = initializeSocket();

    joinGameRoom(newGameCode);

    onNewMessage((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    onNewUser((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [newGameCode]);

  const handleSendMessage = () => {
    sendMessage('Hello from frontend!', newGameCode);
  };

  return <div>Game Code {newGameCode}</div>;
};
export default NewGame;
