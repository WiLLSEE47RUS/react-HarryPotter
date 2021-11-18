import { FC, ReactElement } from 'react';
import { Spinner } from '../../components/Spinner/Spinner.styled';
import { ArrowButton } from '../components/buttons/arrowbtn/arrowbtn';
import { DotButton } from '../components/buttons/dotbtn/dotbtn';
import { Card } from '../components/card/card';
import { Wrapper, CardContent, ButtonContainer } from './registry.styled';
import { useCharactersFetch } from '../../hooks/useCharactersFetch';
import { useAppSelector } from '../../store/store';
import { CARD_LIST_SIZE, MAX_CARDS, MAX_DOTS } from '../../config';

// eslint-disable-next-line sonarjs/cognitive-complexity
export const Registry: FC = () => {
  const MAX_TOTAL_PAGES: number = Math.ceil(MAX_CARDS / CARD_LIST_SIZE);
  let dots: ReactElement[] = [];

  const { loading, error, currentPage, setCurrentPage, totalPages } = useCharactersFetch();

  const state = useAppSelector((state) => state.characters);
  const creatures = state.registryState;
  const cards = creatures.map((el, ind) => <Card key={ind} creature={el} />);

  for (let i = 0; i < totalPages; i++) {
    const dot: ReactElement = <DotButton index={i} handler={setCurrentPage} active={i === currentPage} key={i} />;
    dots.push(dot);
    if (i === MAX_TOTAL_PAGES - 1) {
      break;
    }
  }
  
  if (totalPages > MAX_DOTS) {
    if (currentPage + 1 < MAX_DOTS) {
      dots = dots.slice(
        currentPage === 0 ? currentPage : currentPage - 1,
        currentPage === 0 ? currentPage + CARD_LIST_SIZE : currentPage + CARD_LIST_SIZE - 1
      );
    }else if(currentPage+1>=MAX_DOTS && currentPage+1 <MAX_TOTAL_PAGES){
      dots = dots.slice(currentPage-1, currentPage+2)
    }else{
      dots = dots.slice(MAX_TOTAL_PAGES-CARD_LIST_SIZE, MAX_TOTAL_PAGES)
    }
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
