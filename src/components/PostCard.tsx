import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Post } from "../models/Post";
import { fonts } from "../styles/fonts";

export const PostCard = ({ title, body }: Post) => {
  const handleBigText = (text: string) => text.substring(0, 60) + "...";
  return (
    <View style={styles.box}>
      <Image
        style={styles.image}
        source={{ uri: "https://source.unsplash.com/featured/300x200" }}
      />
      <Text style={styles.title}>
        {title.length > 60 ? handleBigText(title) : title}
      </Text>
      <Text style={styles.bodyText}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f8f7ff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    height: 340,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    marginTop: 8,
    fontFamily: fonts.poppins[500],
    color: "#1b4965",
  },
  bodyText: {
    fontFamily: fonts.poppins[400],
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 8,
  },
});
