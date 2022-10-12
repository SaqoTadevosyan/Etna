import api from "../index";

export const fetchNews = () => {
  return api.get("posts").then((res: any) => res.data.splice(0, 20));
};
