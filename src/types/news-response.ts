export type NewsResponse = Array<News>;

type News = {
  id: number;
  title: string;
  slug: string;
  image: string;
  content: string;
  published: number;
  faction: number;
  newsCreatedBy: { name: string };
  newsUpdatedBy: { name: string };
  created_at: number;
  created_by: number;
  updated_at: number;
  updated_by: number;
};
