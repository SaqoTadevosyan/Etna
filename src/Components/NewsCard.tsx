import { ClockIcon, FavoriteIcon, LikeIcon } from "../Icons/NewsIcons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { INews } from "types/INews";

interface Props {
  post: INews;
}

export default function NewsCard({ post }: Props) {
  return (
    <View style={[styles.newsCardContainer]}>
      <Image
        source={{
          uri: `https://picsum.photos/200/300?id=${post.id}`,
        }}
        style={[styles.image]}
      />
      <View style={[styles.infoContainer]}>
        <Text
          style={[styles.title]}
          numberOfLines={1}
          textBreakStrategy="simple"
        >
          {post.title}
        </Text>
        <Text style={[styles.description]} numberOfLines={1}>
          {post.body}
        </Text>
        <View style={[styles.likesAndUploadTimeContainer]}>
          <View style={[styles.countInfo]}>
            <LikeIcon />
            <Text style={[styles.countText]}>2.1k</Text>
          </View>
          <View style={[styles.countInfo]}>
            <ClockIcon />
            <Text style={[styles.countText]}>1hr ago</Text>
          </View>
          <FavoriteIcon />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newsCardContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 16,
    marginVertical: 10,
    paddingRight: 10,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  image: {
    height: 141,
    width: 92,
    borderRadius: 16,
  },
  infoContainer: {
    padding: 20,
    justifyContent: "space-between",
    flex: 1,
  },
  likesAndUploadTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    marginLeft: 6,
    fontFamily: "Avenir-Medium",
  },
  title: {
    fontFamily: "Avenir-Heavy",
    color: "#376AED",
    fontSize: 18,
  },
  description: {
    fontFamily: "Avenir-Medium",
    color: "#0D253C",
  },
});
