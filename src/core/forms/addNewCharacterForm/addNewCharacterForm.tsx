import { FC, useState } from 'react';
import { useHistory } from 'react-router';
import {
  AddDescription,
  AddGender,
  AddImage,
  AddImageByUrl,
  AddName,
  AddParameters,
  AddRace,
  AddRestParams,
  AddSide,
  AddTags,
  ButtonContainer,
  ChangeUrlButton,
  ColorPalette,
  ColorPicker,
  Content,
  Form,
  PreviewContainer,
  SaveButton,
  SaveUrlButton,
  Separator,
  Wrapper,
} from './addNewCharacterForm.styled';
import { setIsAddNewHeroModalOpen } from '../../../store/characters/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import closeIcon from '../../../assets/icon_close.png';
import { AddNewCharacterPreview } from '../../components/addNewCharacterPreview/addNewCharacterPreview';
import { Formik } from 'formik';
import { validate } from '../../../utils/validateForm/validateForm';
import API from '../../../services/characters.service';
import { IAddNewCharacterForm } from './addNewCharacterForm.type';
import { mapHeroToIHeroType } from '../../factory/mapHeroToCreature';

export const AddNewCharacterForm: FC = () => {
  const [urlSaved, setUrlSaved] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const state = useAppSelector((state) => state.characters);

  const genderDictionary = state.genderDictionary;
  const raceDictionary = state.raceDictionary;
  const sideDictionary = state.sideDictionary;

  const closeForm = (): void => {
    dispatch(setIsAddNewHeroModalOpen(false));
    history.goBack();
  };

  const handleSaveUrl = (): void => {
    setUrlSaved(true);
  };
  const handleChangeUrl = (): void => {
    setUrlSaved(false);
  };

  const initialValues: IAddNewCharacterForm = {
    name: '',
    description: '',
    imageURL: '',
    nameColor: '#ffffff',
    backgroundColor: '#191919',
    parametersColor: '#ffffff',
    tags: '',
    gender: '',
    race: '',
    side: '',
  };

  return (
    <Wrapper onClick={closeForm}>
      <Content
        onClick={(e): void => {
          e.stopPropagation();
        }}
      >
        <button onClick={closeForm} className="closebtn">
          <img src={closeIcon} alt="close" />
        </button>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values): void => {
            console.log(values);
            closeForm();
            void API.postCharacter(mapHeroToIHeroType(values, genderDictionary, raceDictionary, sideDictionary));
          }}
        >
          {(props): JSX.Element => {
            const { values, isSubmitting, handleChange, handleBlur, handleSubmit, errors } = props;
            return (
              <>
                <Form onSubmit={handleSubmit}>
                  <AddName>
                    <label htmlFor="name">
                      Добавить имя {errors.name && <span className="error">{errors.name}</span>}
                    </label>

                    <input type="text" id="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                  </AddName>
                  <AddParameters>
                    <AddGender>
                      <label htmlFor="gender">
                        Пол {errors.gender && <span className="error">{errors.gender}</span>}
                      </label>

                      <input
                        type="text"
                        id="gender"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.gender}
                      />
                    </AddGender>
                    <AddRace>
                      <label htmlFor="race">Раса {errors.race && <span className="error">{errors.race}</span>}</label>
                      <input type="text" id="race" onChange={handleChange} onBlur={handleBlur} value={values.race} />
                    </AddRace>
                    <AddSide>
                      <label htmlFor="side">
                        Сторона {errors.side && <span className="error">{errors.side}</span>}
                      </label>
                      <input type="text" id="side" onChange={handleChange} onBlur={handleBlur} value={values.side} />
                    </AddSide>
                  </AddParameters>
                  <AddDescription>
                    <label htmlFor="description">
                      Добавить описание {errors.description && <span className="error">{errors.description}</span>}{' '}
                      <span>{values.description.length}/100</span>
                    </label>
                    <textarea
                      id="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    ></textarea>
                  </AddDescription>
                  <AddTags>
                    <label htmlFor="tags">
                      Тэги {errors.tags && <span className="error">{errors.tags}</span>}{' '}
                      <span>{values.tags.split(',').length}/3</span>
                    </label>
                    <input type="text" id="tags" onChange={handleChange} onBlur={handleBlur} value={values.tags} />
                  </AddTags>
                  <AddRestParams>
                    <AddImage>
                      <label htmlFor="imageURL">
                        Добавить фото {errors.imageURL && <span className="error">{errors.imageURL}</span>}
                      </label>
                      <AddImageByUrl imageUrl={values.imageURL}>
                        {!urlSaved && (
                          <input
                            placeholder="URL изображения"
                            type="text"
                            id="imageURL"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.imageURL}
                          />
                        )}
                      </AddImageByUrl>
                      <ButtonContainer>
                        <ChangeUrlButton onClick={handleChangeUrl} type="button">
                          Изменить
                        </ChangeUrlButton>
                        <SaveUrlButton onClick={handleSaveUrl} disabled={urlSaved} type="button">
                          Сохранить
                        </SaveUrlButton>
                      </ButtonContainer>
                    </AddImage>
                    <ColorPalette>
                      <span>Выбрать цвет</span>
                      <ColorPicker>
                        <input
                          type="color"
                          name="nameColor"
                          id="nameColor"
                          value={values.nameColor}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="nameColor">Цвет имени</label>
                      </ColorPicker>
                      <ColorPicker>
                        <input
                          type="color"
                          name="backgroundColor"
                          id="backgroundColor"
                          value={values.backgroundColor}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="backgroundColor">Цвет фона параметров</label>
                      </ColorPicker>
                      <ColorPicker>
                        <input
                          type="color"
                          name="parametersColor"
                          id="parametersColor"
                          value={values.parametersColor}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="parametersColor">Цвет параметров</label>
                      </ColorPicker>
                    </ColorPalette>
                  </AddRestParams>
                  <SaveButton disabled={isSubmitting} type="submit">
                    Сохранить
                  </SaveButton>
                </Form>
                <Separator />
                <PreviewContainer>
                  <h4>Предварительный просмотр</h4>
                  <AddNewCharacterPreview values={values} />
                </PreviewContainer>
              </>
            );
          }}
        </Formik>
      </Content>
    </Wrapper>
  );
};
