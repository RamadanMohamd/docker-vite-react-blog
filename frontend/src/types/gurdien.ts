
export interface GurdieanResponse {
  response: GurdieanResponseData
}
export interface GurdieanResponseData {
  results: GurdienArticles[];
  currentPage: number;
  orderBy: string;
  pageSize: number;
  pages: number;
  startIndex: number;
  status: string;
  total: number;
  userTier: string;
}

export interface GurdienArticles {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}
