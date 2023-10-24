export const getRgb = (value: number) => {
  // R, G, B 구성 요소를 추출
  const r = (value >> 16) & 0xff;
  const g = (value >> 8) & 0xff;
  const b = value & 0xff;

  return `rgb(${r}, ${g}, ${b})`;
};
