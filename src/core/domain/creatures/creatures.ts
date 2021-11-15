import belatriss from '../../../assets/characters/belatriss.png';
import drako from '../../../assets/characters/drako.png';
import dumbledoor from '../../../assets/characters/dumbledoor.png';
import hagrid from '../../../assets/characters/hagrid.png';
import harry from '../../../assets/characters/harry.png';
import hermiona from '../../../assets/characters/hermiona.png';
import ron from '../../../assets/characters/ron.png';
import snegg from '../../../assets/characters/snegg.png';
import volan from '../../../assets/characters/volan.png';
import { ICreature } from './creatures.type';

export const characters: ICreature[] = [
  {
    id: '1',
    name: 'Гермиона Грейнджер',
    gender: 'Женщина',
    race: 'Человек',
    side: 'Добро',
    imageURL: hermiona,
    backgroundColor: '#512C38',
    parametersColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '2',
    name: 'Драко Малфой',
    gender: 'Мужчина',
    race: 'Человек',
    side: 'Зло',
    imageURL: drako,
    backgroundColor: '#263A31',
    parametersColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '3',
    name: 'Гарри Поттер',
    gender: 'Мужчина',
    race: 'Человек',
    side: 'Добро',
    imageURL: harry,
    backgroundColor: '#462929',
    parametersColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '4',
    name: 'Белатрисса Лестрейндж',
    gender: 'Женщина',
    race: 'Человек',
    side: 'Зло',
    imageURL: belatriss,
    backgroundColor: '#3B342E',
    parametersColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '5',
    name: 'Рон Уизли',
    gender: 'Мужчина',
    race: 'Человек',
    side: 'Добро',
    imageURL: ron,
    backgroundColor: '#1B0A10',
    parametersColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '6',
    name: 'Северус Снегг',
    gender: 'Мужчина',
    race: 'Человек',
    side: 'Зло',
    imageURL: snegg,
    backgroundColor: '#26514E',
    parametersColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '7',
    name: 'Альбус Дамблдор',
    gender: 'Мужчина',
    race: 'Человек',
    side: 'Добро',
    imageURL: dumbledoor,
    backgroundColor: '#5C6353',
    parametersColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '8',
    name: 'Лорд Волан-де-Морт',
    gender: 'Женщина',
    race: 'Человек',
    side: 'Порядок',
    imageURL: volan,
    backgroundColor: '#123856',
    parametersColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '9',
    name: 'Рубеус Хагрид',
    gender: 'Мужчина',
    race: 'Полуеловек',
    side: 'Порядок',
    imageURL: hagrid,
    backgroundColor: '#756D5B',
    parametersColor: '#fff',
    nameColor: '#fff',
  },
];
