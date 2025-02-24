import { NewsResposne } from "./news";
import { GurdieanResponse } from "./gurdien";
import { NewYorkTimesResponse } from "./ny";

export interface BlogItem {
  source: string;
  webTitle?: string;
  webUrl?: string;
  title?: string;
  description?: string;
  url?: string;
  headline?: { main: string };
  abstract?: string;
  web_url?: string;
  sectionName?: string;
  urlToImage?: string
}

export interface FormattedItem {
  title: string;
  description: string;
  url: string;
  categories: string[];
  image?: string
}

export type SourceMap = {
  newsAPI?: NewsResposne;
  guardianAPI?: GurdieanResponse;
  newYorkTimesAPI?: NewYorkTimesResponse;
};

export type Source = keyof SourceMap;