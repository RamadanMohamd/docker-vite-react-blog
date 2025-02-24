import { BlogItem, FormattedItem } from "./types/utils";
import news from "./assets/news.webp";
import guardian from "./assets/guardian.webp";
import ny from "./assets/ny.webp";

export const formatData = (rawData: BlogItem[]): FormattedItem[] => {
  return rawData.map((item) => {
    if (item?.urlToImage) {
      return {
        title: item.title || "Unknown Title",
        description: item.description || "No description available",
        url: item.url || "#",
        categories: ["Business"],
        image: item.urlToImage || news,
      };
    }
    if (item?.webUrl) {
      return {
        title: item.webTitle || "Unknown Title",
        description: item.webTitle || "",
        url: item.webUrl || "#",
        categories: ["Sport"],
        image: guardian,
      };
    } else if (item?.abstract) {
      return {
        title: item.headline?.main || "Unknown Title",
        description: item.abstract || "No description available",
        url: item.web_url || "#",
        categories: ["Economy"],
        image: ny,
      };
    } else {
      // Handle other cases or add default values
      return {
        title: "Unknown Title",
        description: "No description available",
        url: "#",
        categories: ["Miscellaneous"],
      };
    }
  });
};
