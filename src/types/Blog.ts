type ItemProps = {
  id: string;
  provider: string;
};

export type Blog = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  launches: ItemProps[];
  events: ItemProps[];
};
export type DataProps = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Blog[];
};

export type FiltersBlog = {
  title_contains: string;
  _sort: string;
};
