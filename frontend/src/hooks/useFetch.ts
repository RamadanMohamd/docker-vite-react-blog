import { useCallback } from "react";
import { fetchNewsAPI, fetchGurdienAPI, fetchNewYorkTimesAPI } from "../api";
import { AxiosResponse } from "axios";
import { SourceMap, Source } from "../types/utils";

export const useFetchAPI = () => {
  return useCallback(<S extends Source>(sources: S[]): ((query: string) => Promise<SourceMap[S][]>) => {
    const apiMap = {
      newsAPI: fetchNewsAPI,
      guardianAPI: fetchGurdienAPI,
      newYorkTimesAPI: fetchNewYorkTimesAPI,
    };


    return async (query: string) => {
      const results = await Promise.all(
        sources.filter((source)=> apiMap[source]).map(async (source) => {
          const fetchFunc = apiMap[source];
          if (!fetchFunc) {
            throw new Error(`Unknown source: ${source}`);
          }
          const response = await fetchFunc(query) as AxiosResponse<SourceMap[S]>;
          return response.data;
        })
      );
      return results;
    };
  }, []);
};