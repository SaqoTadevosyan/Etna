import NewsCard from "../Components/NewsCard";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { allNewsSelector, getAllNews, newsLoading } from "../store/slices/news";
import { useDispatch, useSelector } from "react-redux";
import NewsSkeleton from "../Components/Skeletons/NewsSkeleton";
import CategoriesCarousel from "../Components/CategoriesCarousel";

export default function News() {
  const news = useSelector(allNewsSelector);
  const loading = useSelector(newsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading && <NewsSkeleton />}
      <ScrollView>
        <Text style={[styles.title]}>Explore today’s</Text>
        <CategoriesCarousel />
        {news.length > 0 ? (
          <FlatList
            data={news}
            renderItem={singleNews => {
              return <NewsCard post={singleNews.item} />;
            }}
            style={{ paddingVertical: 10,paddingHorizontal:30, backgroundColor: "#F5F8FF" }}
            keyExtractor={item => item.id}
          />
        ) : !loading ? (
          <Text>No Results</Text>
        ) : (
          <View />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: "#F5F8FF" },
  title: {
    color: "#0D253C",
    fontFamily: "Avenir-Heavy",
    fontSize: 24,
    paddingLeft: 20,
    marginBottom: 10,
  },
});
