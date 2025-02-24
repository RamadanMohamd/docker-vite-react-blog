import axios from "axios";
import { NewsResposne, GurdieanResponse, NewYorkTimesResponse } from "../types";

export const fetchNewsAPI = async (query: string) => {
  return axios.get<NewsResposne>(`https://newsapi.org/v2/everything`, {
    params: {
      q: query || "business",
      apiKey: import.meta.env.VITE_NEWS_API_KEY,
    },
  });
};

export const fetchGurdienAPI = async (query: string) => {
  return axios.get<GurdieanResponse>(
    `https://content.guardianapis.com/search`,
    {
      params: {
        q: query || "business",
        "api-key": import.meta.env.VITE_GUARDIAN_API_KEY,
      },
    }
  );
};

export const fetchNewYorkTimesAPI = async (query: string) => {
  return axios.get<NewYorkTimesResponse>(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
    {
      params: {
        q: query || "business",
        "api-key": import.meta.env.VITE_NEW_YORK_TIMES_API_KEY,
      },
    }
  );
};
