import { POSITION_ITEMS } from "@src/constants/Position/position.constant";

export const searchPosition = (position: string) => {
  return POSITION_ITEMS.filter((itmes) => itmes.includes(position));
};
