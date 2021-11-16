import { FC, useState } from 'react';
import { useAppSelector } from '../../../store/store';
import { mapHeroToCreature, mapHeroToIHeroModal } from '../../factory/mapHeroToCreature';
import { ArrowButton } from '../buttons/arrowbtn/arrowbtn';
import { DotButton } from '../buttons/dotbtn/dotbtn';
import { Card } from '../card/card';
import { HeroModalContent } from '../heroModal/heroModalContent/heroModalContent';
import { ButtonContainer, Heading, PreviewWrapper, Span } from './addNewCharacterPreview.styled';
import { IAddNewCharacterPreview } from './addNewCharacterPreview.type';

export const AddNewCharacterPreview: FC<IAddNewCharacterPreview> = (props) => {
  const [activeView, setActiveView] = useState(0);
  return (
    <>
      <Heading>
        <Span active={activeView === 0} onClick={(): void => setActiveView(0)}>
          Вид 1
        </Span>
        <Span active={activeView === 1} onClick={(): void => setActiveView(1)}>
          Вид 2
        </Span>
      </Heading>
      <PreviewWrapper>
        {activeView === 0 && <Card creature={mapHeroToCreature(props.values)} type="small" />}
        {activeView === 1 && <HeroModalContent state={mapHeroToIHeroModal(props.values).state} type="smallmodal" />}
        <ButtonContainer>
            <ArrowButton direction = 'backward' type = 'small' totalPages = {2} handler = {setActiveView}/>
            <DotButton index = {0} active={activeView === 0} handler = {setActiveView} type = 'small'/>
            <DotButton index = {1} active={activeView === 1} handler = {setActiveView} type = 'small'/>
            <ArrowButton direction = 'forward' type = 'small'  totalPages = {2} handler = {setActiveView}/>
        </ButtonContainer>
      </PreviewWrapper>
    </>
  );
};
