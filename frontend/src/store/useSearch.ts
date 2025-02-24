import { create } from "zustand";
import { Source } from "../types/utils";

type SearchState = {
  query: string;
  sources: string[];
  sourceKeys: Source[];
  setQuery: (query: string) => void;
  addOrRemoveSource: (source: string) => void;
};

export const useSearch = create<SearchState>((set) => ({
  query: "",
  sources: ["News API", "Gurdian API", "New York Times API"],
  sourceKeys: ["newsAPI", "guardianAPI", "newYorkTimesAPI"],
  setQuery: (query) => set({ query }),
  addOrRemoveSource: (newSource) =>
    set((state) => {
      const items = newSource.split(" ");
      const blogKey = (items[0].toLocaleLowerCase() +
        items.slice(1).join("")) as Source;

      return {
        sources: state.sources.includes(newSource)
          ? state.sources.filter((s) => s !== newSource)
          : [...state.sources, newSource],
        sourceKeys: state.sourceKeys.includes(blogKey)
          ? state.sourceKeys.filter((s) => s !== blogKey)
          : [...state.sourceKeys, blogKey],
      };
    }),
}));