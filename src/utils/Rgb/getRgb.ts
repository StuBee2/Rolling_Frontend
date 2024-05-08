export const getRgb = (value: number) => {
  // 24비트 rgb 값이 들어옴
  const r = (value >> 16) & 0xff; // 16비트만큼 오른쪽으로 시프트 연산 후, 0xff(255)만큼 비트 연산하여 r값 추출
  const g = (value >> 8) & 0xff; // 8비트만큼 오른쪽으로 시프트 연산 후, 0xff(255)만큼 비트 연산하여 g값 추출
  const b = value & 0xff;

  return `rgb(${r}, ${g}, ${b})`;
};
