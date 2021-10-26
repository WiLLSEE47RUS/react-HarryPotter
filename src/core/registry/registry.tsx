import { FC, ReactElement, useState } from 'react';
import { ArrowButton } from '../components/buttons/arrowbtn/arrowbtn';
import { DotButton } from '../components/buttons/dotbtn/dotbtn';
import { Card } from '../components/card/card';
import { Wrapper, CardContent, ButtonContainer } from './registry.styled';
import { IRegistryProps } from './registry.type';

export const Registry: FC<IRegistryProps> = (props) => {

  const [activePage, setActivePage] = useState(0);
  const itemsByPage = 3;
  const totalPages = Math.ceil(props.creatures.length / itemsByPage);
  const cards = props.creatures
    .slice(activePage * itemsByPage, activePage * itemsByPage + itemsByPage)
    .map((el, ind) => <Card key={ind} creature={el} />);
  const dots: ReactElement[] = [];

  for (let i = 0; i < totalPages; i++) {
    const dot: ReactElement = <DotButton index={i} handler={setActivePage} active={i === activePage} key={i} />;
    dots.push(dot);
  }

  return (
    <Wrapper>
      <CardContent>{...cards}</CardContent>
      <ButtonContainer>
        <ArrowButton direction="backward" totalPages={totalPages} handler={setActivePage} />
        {...dots}
        <ArrowButton direction="forward" totalPages={totalPages} handler={setActivePage} />
      </ButtonContainer>
    </Wrapper>
  );
};
