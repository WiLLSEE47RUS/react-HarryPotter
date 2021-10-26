import { FC } from 'react';
import Button from '../../../components/Button/button';
import { Content, Wrapper } from './home.styled';

const Home: FC = () => {
  return (
    <Wrapper>
      <Content>
          <h1>Найди любимого персонажа <br/>“Гарри Поттера”</h1>
          <p>Вы сможете узнать тип героев, их <br/>способности, сильные стороны и недостатки.</p>
          <Button link ='/characters' text='Начать'/>
      </Content>
    </Wrapper>
  );
};

export default Home;
