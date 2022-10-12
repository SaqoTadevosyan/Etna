import { configureStore } from "@reduxjs/toolkit";

import newsReducer from "./slices/news";
import profileReducer from "./slices/profile";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    profile: profileReducer,
  },
});
