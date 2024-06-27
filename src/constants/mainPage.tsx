import IcBuilding from "../assets/ic_building.svg?react";
import IcChat from "../assets/ic_chat.svg?react";
import IcHome from "../assets/ic_home.svg?react";
import IcMy from "../assets/ic_my.svg?react";
import IcPlace from "../assets/ic_place.svg?react";

export const optionList = [
  { id: 0, buttonText: "전체" },
  { id: 1, buttonText: "부동산" },
  { id: 2, buttonText: "중고차" },
  { id: 3, buttonText: "알바" },
];

export const navItemList = [
  {
    id: 0,
    icon: <IcHome />,
    name: "홈",
  },
  {
    id: 1,
    icon: <IcBuilding />,
    name: "동네생활",
  },
  {
    id: 2,
    icon: <IcPlace />,
    name: "내 근처",
  },
  { id: 3, icon: <IcChat />, name: "채팅" },
  {
    id: 4,
    icon: <IcMy />,
    name: "나의 당근",
  },
];
