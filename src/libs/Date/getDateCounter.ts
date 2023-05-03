import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
} from "date-fns";

export function getDateText(date: Date): string {
  const now = new Date();
  const days = differenceInDays(now, date);
  const hours = differenceInHours(now, date);
  const minutes = differenceInMinutes(now, date);
  const months = differenceInMonths(now, date);

  if (days === 0) {
    if (hours === 0) return `${minutes}분 전`;
    else return `${hours}시간 전`;
  } else if (days === 1) return "어제";
  else if (days < 7) return `${days}일 전`;
  else if (days < 365) return `${months}개월 전`;
  else return `${Math.floor(days / 365)}년 전`;
}
