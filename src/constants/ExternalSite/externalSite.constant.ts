interface Type {
  id: number;
  name: string;
  logo: string;
  link: string;
}

export const EXTERNALSITE_ITEMS: Type[] = [
  {
    id: 0,
    name: "원티드",
    logo: "https://rollingbucket.s3.ap-northeast-2.amazonaws.com/rollingbucket/4e77e6ce-e511-48ac-ae6b-5828101d9adafile",
    link: "https://www.wanted.co.kr/wdlist/518?country=kr&job_sort=job.latest_order&years=0&locations=seoul.all",
  },
  {
    id: 1,
    name: "Blind",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/B_symbol_white-red.png",
    link: "https://www.teamblind.com/kr/topics/%EA%B0%9C%EB%B0%9C",
  },
  {
    id: 2,
    name: "사람인",
    logo: "https://yt3.googleusercontent.com/ytc/AGIKgqOVZ_qx_7hVUXX-0z6kyiRn7a5V1zofWRdOQZRVDQ=s900-c-k-c0x00ffffff-no-rj",
    link: "https://www.saramin.co.kr/zf_user/search?search_area=main&search_done=y&search_optional_item=n&searchType=search&searchword=it",
  },
  {
    id: 3,
    name: "잡플래닛",
    logo: "https://image.rocketpunch.com/company/4268/jobplanet_logo_1513155867.png?s=400x400&t=inside",
    link: "https://www.jobplanet.co.kr/job",
  },
  {
    id: 4,
    name: "잡코리아",
    logo: "https://play-lh.googleusercontent.com/vSSmZCEWUfHBzI24lUILNE_rDuwyDKwizb6afmpLmXluhPigrXJeL3dPEp7upXeNUTQ",
    link: "https://www.jobkorea.co.kr/OnePick/JobList?Ord=GcmCodeAmtDesc&DutyCtgr=10031",
  },
];
