type ItemProps = {
  id: string;
  provider: string;
};

export type BlogProps = {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: ItemProps[];
  events: ItemProps[];
};

export type FiltersBlog = {
  title_contains: string;
  _sort: string;
};
