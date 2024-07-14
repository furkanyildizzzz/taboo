import Link from 'next/link';
import styled from 'styled-components';
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const MainMenu = () => {
  return (
    <Card>
      <CardHeader>Menu</CardHeader>
      <CardBody>
        <ul>
          <li>
            <Link href={`/game/create`}>Create New Game</Link>
          </li>
          <li>
            <Link href={`/game/join`}>Join Game</Link>
          </li>
          <li>
            <Link href={`/howToPlay`}>How To Play</Link>
          </li>
          <li>
            <Link href={`/card/submit`}>Submit a Card</Link>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default MainMenu;
