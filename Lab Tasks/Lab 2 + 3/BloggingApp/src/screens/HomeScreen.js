import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import { Card } from "react-native-elements";
import { useNetInfo } from "@react-native-community/netinfo";

import { removeData } from "../functions/AsyncStorageFunctions";
import { getAllPosts, savePost } from "../functions/PostFunctions";

import { AuthContext } from "../providers/AuthProvider";

import PostCard from "./../components/PostCard";
import HeaderTop from "./../components/HeaderTop";
import InputCard from "../components/InputCard";
import LikeCommentButton from "../components/LikeCommentButton";
import Loading from "../components/Loading";


const HomeScreen = (props) => {

  const netinfo = useNetInfo();
  if (netinfo.type != "unknown" && !netinfo.isInternetReachable) {
    alert("No Internet!");
  }

  const [posts, setPosts] = useState([]);
  const [postID, setpostID] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState([]);

  const image = { uri: "https://i.pinimg.com/originals/59/11/cd/5911cda1f1ae980b26ca367af3197dfd.jpg" };

  const loadPosts = async () => {
    setLoading(true);
    let response = await getAllPosts();
    if (response != null) {
      setPosts(response);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  if (!loading) {
    return (
      <AuthContext.Consumer>
        {(auth) => (
          <View style={styles.viewStyle}>
            <ImageBackground source={image} style={styles.image}>
            <HeaderTop
              DrawerFunction={() => {
                props.navigation.toggleDrawer();
              }}
            />
            <Card>
              <InputCard
                Text="What's On Your Mind?"
                currentFunc={setInput}
                currentText={input}
                pressFunction={async () => {
                  setpostID([auth.CurrentUser.username + "-post-" + Math.random().toString(36).substring(7)]);
                  savePost(
                    auth.CurrentUser.username,
                    auth.CurrentUser.name,
                    postID,
                    input
                  )
                }}
              />
            </Card>
            <FlatList
              data={posts}
              onRefresh={loadPosts}
              refreshing={loading}
              renderItem={function ({ item }) {
                let data = JSON.parse(item)
                return (
                  <View>
                    <Card>
                      <PostCard
                        author={data.name}
                        body={data.post}
                        removeFunc={async () => {
                          await removeData(JSON.stringify(data.postID))
                          alert("Post Deleted!");
                        }}
                      />
                      <Card.Divider />
                      <LikeCommentButton
                        postID={data.postID}
                        likes={data.likes}
                        navigateFunc={() => {
                          props.navigation.navigate("PostScreen", {
                            postId: data.postID,
                          });
                        }}
                      />
                    </Card>
                  </View>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
            </ImageBackground>
          </View>
        )}
      </AuthContext.Consumer>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Loading />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default HomeScreen;
