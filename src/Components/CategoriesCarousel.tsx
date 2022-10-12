import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";

const data = [
  {
    imgUrl:
      "https://media.istockphoto.com/vectors/vrgirl-vector-id1351274835?k=20&m=1351274835&s=612x612&w=0&h=pjoE5bADfq6qKHUrkQDUxWjKN-StjMmVAz9vp-fqxYc=",
    title: "Technology",
  },
  {
    imgUrl:
      "https://static.toiimg.com/photo/msid-92696733,width-96,height-65.cms",
    title: "Adventure",
  },
  {
    imgUrl:
      "https://helios-i.mashable.com/imagery/roundups/03jVNRvCOgZl6VPk7oHOH8t/hero-image.fill.size_1200x900.v1618547405.jpg",
    title: "Sport",
  },
];

const CarouselCardItem = ({ item, index }) => {
  return (
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
    </View>
  );
};

export default function CategoriesCarousel() {
  return (
    <Carousel
      layout="stack"
      layoutCardOffset={"60"}
      data={data}
      renderItem={CarouselCardItem}
      sliderWidth={Dimensions.get("window").width}
      itemWidth={Math.round(Dimensions.get("window").width * 0.7)}
      inactiveSlideShift={0}
      useScrollView={true}
      style={{ marginBottom: 32 }}
      sliderHeight={300}
      slideStyle={{ paddingBottom: 30 }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F8FF",
    borderRadius: 28,
    width: 236,
    paddingBottom: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: 236,
    height: 273,
    borderRadius: 28,
    backgroundColor: "#F5F8FF",
    zIndex: 1,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 28,
    backgroundColor: "#F5F8FF",
  },
  title: {
    fontFamily: "Avenir-Heavy",
    color: "white",
    position: "absolute",
    zIndex: 999,
    left: 20,
    bottom: 40,
    fontSize: 18,
  },
});
