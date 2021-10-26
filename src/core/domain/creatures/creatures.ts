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
    img: hermiona,
    descBackgroundColor: '#512C38',
    textColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '2',
    name: 'Драко Малфой',
    gender: 'Мужчина',
    race: 'Человек',
    side: 'Зло',
    img: drako,
    descBackgroundColor: '#263A31',
    textColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '3',
    name: 'Гарри Поттер',
    gender: 'Мужчина',
    race: 'Человек',
    side: 'Добро',
    img: harry,
    descBackgroundColor: '#462929',
    textColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '4',
    name: 'Белатрисса Лестрейндж',
    gender: 'Женщина',
    race: 'Человек',
    side: 'Зло',
    img: belatriss,
    descBackgroundColor: '#3B342E',
    textColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '5',
    name: 'Рон Уизли',
    gender: 'Мужчина',
    race: 'Человек',
    side: 'Добро',
    img: ron,
    descBackgroundColor: '#1B0A10',
    textColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '6',
    name: 'Северус Снегг',
    gender: 'Мужчина',
    race: 'Человек',
    side: 'Зло',
    img: snegg,
    descBackgroundColor: '#26514E',
    textColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '7',
    name: 'Альбус Дамблдор',
    gender: 'Мужчина',
    race: 'Человек',
    side: 'Добро',
    img: dumbledoor,
    descBackgroundColor: '#5C6353',
    textColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '8',
    name: 'Лорд Волан-де-Морт',
    gender: 'Женщина',
    race: 'Человек',
    side: 'Порядок',
    img: volan,
    descBackgroundColor: '#123856',
    textColor: '#fff',
    nameColor: '#fff',
  },
  {
    id: '9',
    name: 'Рубеус Хагрид',
    gender: 'Мужчина',
    race: 'Полуеловек',
    side: 'Порядок',
    img: hagrid,
    descBackgroundColor: '#756D5B',
    textColor: '#fff',
    nameColor: '#fff',
  },
];
