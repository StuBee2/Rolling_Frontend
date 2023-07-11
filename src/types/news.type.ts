export interface NewsInfiniteScrollType {
  data: NewsResponseType[];
  nextPage: number;
}

export interface NewsResponseType {
  total: number;
  start: number;
  display: number;
  items: [
    {
      title: string;
      originallink: string;
      link: string;
      description: string;
      pubDate: string;
    }
  ];
}
