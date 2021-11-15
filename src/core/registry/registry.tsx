import { FC, ReactElement } from 'react';
import { Spinner } from '../../components/Spinner/Spinner.styled';
import { ArrowButton } from '../components/buttons/arrowbtn/arrowbtn';
import { DotButton } from '../components/buttons/dotbtn/dotbtn';
import { Card } from '../components/card/card';
import { Wrapper, CardContent, ButtonContainer } from './registry.styled';
import { useCharactersFetch } from '../../hooks/useCharactersFetch';
import { useAppSelector } from '../../store/store';

export const Registry: FC = () => {
  // const itemsByPage = 3;
  // const totalPages = Math.ceil(props.creatures.length / itemsByPage);
  const totalPages = 3;
  const dots: ReactElement[] = [];
  const { loading, error, currentPage, setCurrentPage } = useCharactersFetch();

  const state = useAppSelector((state) => state.characters);
  const creatures = state.registryState;
  // const dispatch = useAppDispatch();
  const cards = creatures.map((el, ind) => <Card key={ind} creature={el} />);
  for (let i = 0; i < totalPages; i++) {
    const dot: ReactElement = <DotButton index={i} handler={setCurrentPage} active={i === currentPage} key={i} />;
    dots.push(dot);
  }

  if (error) {
    return <div>Something went wrong</div>;
  }
  return (
    (!loading && (
      <Wrapper>
        <CardContent>{...cards}</CardContent>
        <ButtonContainer>
          <ArrowButton direction="backward" totalPages={totalPages} handler={setCurrentPage} />
          {...dots}
          <ArrowButton direction="forward" totalPages={totalPages} handler={setCurrentPage} />
        </ButtonContainer>
      </Wrapper>
    )) || <Spinner />
  );
};
