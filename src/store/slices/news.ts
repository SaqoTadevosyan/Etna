import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INews } from "types/INews";

import { fetchNews } from "../../services/News";

type stateType = {
  favoriteNews: INews[];
  news: INews[];
  loading: boolean;
};
const initialState: stateType = {
  favoriteNews: [],
  news: [],
  loading: false,
};

export const getAllNews = createAsyncThunk("news/get", async () => {
  const response = await fetchNews();
  return response;
});

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setAddToFavorites: (state, action) => {
      state.favoriteNews.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllNews.fulfilled, (state, payload) => {
      state.news = payload.payload;
      state.favoriteNews = payload.payload;
      state.loading = false;
    });
    builder.addCase(getAllNews.pending, state => {
      state.loading = true;
    });
  },
});

//Selectors
export const favoriteNews = state => state.news.favoriteNews;
export const allNewsSelector = state => state.news.news;
export const newsLoading = state => state.news.loading;

export default newsSlice.reducer;
