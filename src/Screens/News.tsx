import NewsCard from "../Components/NewsCard";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import { allNewsSelector, getAllNews, newsLoading } from "../store/slices/news";
import { useDispatch, useSelector } from "react-redux";
import NewsSkeleton from "../Components/Skeletons/NewsSkeleton";

export default function News() {
  const news = useSelector(allNewsSelector);
  const loading = useSelector(newsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  return (
    <>
      {loading && <NewsSkeleton />}
      {news.length > 0 ? (
        <FlatList
          data={news}
          renderItem={singleNews => {
            return <NewsCard post={singleNews.item} />;
          }}
          style={{ padding: 10 }}
        />
      ) : !loading ? (
        <Text>No Results</Text>
      ) : (
        <View />
      )}
    </>
  );
}
