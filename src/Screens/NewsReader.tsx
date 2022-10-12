import React from "react";

import { StoryContainer } from "react-native-stories-view";
import { useSelector } from "react-redux";
import { allNewsSelector } from "../store/slices/news";

export default function NewsReader() {
  return (
    <StoryContainer
      visible={true}
      enableProgress={true}
      images={[
        `https://picsum.photos/200/300?id=${Math.random()}`,
        `https://picsum.photos/200/300?id=${Math.random()}`,
        `https://picsum.photos/200/300?id=${Math.random()}`,
        `https://picsum.photos/200/300?id=${Math.random()}`,
        `https://picsum.photos/200/300?id=${Math.random()}`,
        `https://picsum.photos/200/300?id=${Math.random()}`,
        `https://picsum.photos/200/300?id=${Math.random()}`,
        `https://picsum.photos/200/300?id=${Math.random()}`,
        `https://picsum.photos/200/300?id=${Math.random()}`,
      ]}
      duration={20}
      containerStyle={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
