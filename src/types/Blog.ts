type ItemProps = {
  id: string;
  provider: string;
};

export type BlogProps = {
  id: number;
  title: string;
  url: string;
  imgUrl: string;
  newSite: string;
  summary: string;
  publishedAt: string;
  launches: ItemProps[];
  events: ItemProps[];
};
