import { uniqueId } from "lodash";
import { STATUS } from "../../types";

const kanbandata_mock = 
        [
      {
        id: uniqueId(),
        displayName: "Мария Ивановна",
        photo: "https://react-declarative-playground.github.io/image/7.jpg",
        status: STATUS.PRESENT,
        className: '9-A',
        age: 17,
      },
      {
        id: uniqueId(),
        displayName: "Erkinov Bunyod",
        photo: "https://react-declarative-playground.github.io/image/5.jpg",
        status: STATUS.ABSENT,
        className: '9-A',
        age: 17,
      },
      {
        id: uniqueId(),
        displayName: "Shaxzod Murodov",
        photo: "https://react-declarative-playground.github.io/image/6.jpg",
        status: STATUS.PRESENT,
        className: '9-A',
        age: 17,
      },
      {
        id: uniqueId(),
        displayName: "Madina Isaqova",
        photo: "https://react-declarative-playground.github.io/image/4.jpg",
        status: STATUS.ABSENT,
        className: '9-A',
        age: 17,
      },
      {
        id: uniqueId(),
        displayName: "Sadiriddin Alisherov",
        photo: "https://react-declarative-playground.github.io/image/5.jpg",
        status: STATUS.PRESENT,
        className: '9-A',
        age: 17,
      },
      {
        id: uniqueId(),
        displayName: "Bekmirza Ahmedov",
        photo: "https://react-declarative-playground.github.io/image/6.jpg",
        status: STATUS.EXCUSED,
        className: '9-A',
        age: 17,
      },
      {
        id: uniqueId(),
        displayName: "Shohruh Azimov",
        photo: "https://react-declarative-playground.github.io/image/1.jpg",
        status: STATUS.PRESENT,
        className: '9-A',
        age: 17,
      },
      {
        id: uniqueId(),
        displayName: "Mirsolihov Miraziz",
        photo: "https://react-declarative-playground.github.io/image/2.jpg",
        status: STATUS.ABSENT,
        className: '9-A',
        age: 17,
      },
      {
        id: uniqueId(),
        displayName: "Noila Ergasheva",
        photo: "https://react-declarative-playground.github.io/image/3.jpg",
        status: STATUS.PRESENT,
        className: '9-A',
        age: 17,
      },
    ]

    export default kanbandata_mock