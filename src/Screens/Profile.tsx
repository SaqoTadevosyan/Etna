import React, { useState } from "react";

import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Popover from "react-native-popover-view";
import { useSelector } from "react-redux";

import NewsCard from "../Components/NewsCard";
import { MoreIcon } from "../Icons/ProfileIcons";
import { favoriteNews } from "../store/slices/news";
import { userProfileSelector } from "../store/slices/profile";
import { IUser } from "../types/IProfile";

export default function Profile() {
  const news = useSelector(favoriteNews);
  const navigation = useNavigation();
  const [showPopover, setShowPopover] = useState(false);
  const userProfile: IUser = useSelector(userProfileSelector);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F8FF" }}>
      <View style={[styles.header]}>
        <Text style={[styles.headerTitle]}>Profile</Text>
        <Popover
          isVisible={showPopover}
          from={
            <TouchableOpacity onPress={() => setShowPopover(true)}>
              <MoreIcon />
            </TouchableOpacity>
          }
        >
          <TouchableOpacity
            style={{ paddingHorizontal: 20, paddingVertical: 10, flex: 2 }}
            onPress={() => {
              setShowPopover(false);
              navigation.navigate("ProfileStack", { screen: "EditProfile" });
            }}
          >
            <Text numberOfLines={1}>Edit Profile</Text>
          </TouchableOpacity>
        </Popover>
      </View>
      <ScrollView>
        <View style={[styles.profileContainer]}>
          <View style={[styles.profileInfoContainer]}>
            <View style={[styles.profileInfoHeader]}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
                }}
                style={styles.profileImage}
              />
              <View>
                <Text style={[styles.userName]}>@{userProfile.userName}</Text>
                <Text style={[styles.name]}>{userProfile.name}</Text>
                <Text style={[styles.position]}>{userProfile.position}</Text>
              </View>
            </View>
            <View style={[styles.aboutMeContainer]}>
              <Text style={[styles.aboutMeTitle]}>About Me</Text>
              <Text style={[styles.description]}>
                Madison Blackstone is a director of user experience design, with
                experience managing global teams.
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.favoriteNewsContainer]}>
          <Text style={[styles.headerTitle]}>Favorite Posts</Text>
          {news.length > 0 ? (
            <FlatList
              data={news}
              renderItem={singleNews => {
                return <NewsCard post={singleNews.item} />;
              }}
              keyExtractor={item => item.id}
            />
          ) : (
            <Text style={[styles.noResults]}>No Results</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  profileInfoContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    marginTop: 16,
    padding: 32,
  },
  profileContainer: {
    backgroundColor: "#F5F8FF",
    paddingBottom: 32,
    paddingHorizontal: 40,
  },
  headerTitle: {
    fontFamily: "Avenir-Heavy",
    color: "#0D253C",
    fontSize: 24,
  },
  profileImage: {
    height: 84,
    width: 84,
    borderRadius: 22,
    marginRight: 24,
  },
  profileInfoHeader: {
    flexDirection: "row",
  },
  userName: {
    color: "#2D4379",
    fontFamily: "Avenir-Medium",
  },
  name: {
    fontSize: 18,
    fontFamily: "Avenir-Heavy",
  },
  position: {
    color: "#376AED",
    fontSize: 16,
    fontFamily: "Avenir-Medium",
  },
  aboutMeContainer: {
    marginTop: 24,
  },
  aboutMeTitle: {
    color: "#0D253C",
    fontSize: 16,
    fontFamily: "Avenir-Heavy",
  },
  description: {
    color: "#2D4379",
    marginTop: 8,
    fontFamily: "Avenir-Medium",
  },
  favoriteNewsContainer: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 32,
    paddingHorizontal: 40,
    paddingVertical: 32,
  },
  noResults: {
    textAlign: "center",
    color: "#2D4379",
    marginTop: 8,
    fontFamily: "Avenir-Medium",
  },
});
