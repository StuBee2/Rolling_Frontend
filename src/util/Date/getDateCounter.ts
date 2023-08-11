export function getDateText(date: Date): string {
  const dateFormat =
    date.getFullYear() +
    "년 " +
    (date.getMonth() + 1) +
    "월 " +
    date.getDate() +
    "일";
  return dateFormat;
}
