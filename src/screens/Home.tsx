import { View, Text, FlatList, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { useQuery } from "react-query";
import { listPosts } from "../services/posts";
import { Post } from "../models/Post";
import { PostCard } from "../components/PostCard";
import { fonts } from "../styles/fonts";

const Item = ({ title }: Post) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export const Home = () => {
  const { data } = useQuery<Post[]>("posts", listPosts);

  return (
    <View>
      <Text style={styles.title}>Home</Text>
      {data && (
        <FlatList
          data={data}
          renderItem={({ item }) => <PostCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    marginBottom: 8,
    fontFamily: fonts.poppins[500],
    color: "#62b6cb",
  },
});
