import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { useNetInfo } from "@react-native-community/netinfo";

import { storeDataJSON } from "../functions/AsyncStorageFunctions";
import { getDataJSON } from "../functions/AsyncStorageFunctions";
import {getAllPosts} from "../functions/PostFunctions";

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
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState([]);

  const loadPosts = async () => {
    setLoading(true);
    let response = await getAllPosts();
    if (response!=null) {
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
                  let currentPost = {
                    username: auth.CurrentUser.username,
                    name: auth.CurrentUser.name,
                    postID: postID,
                    post: input,
                    likes: 0,
                  };
                  storeDataJSON(
                    JSON.stringify(postID),
                    JSON.stringify(currentPost)
                  );
                  
                  let UserData = await getDataJSON(JSON.stringify(postID));
                  console.log(UserData);
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
                      />
                      <Card.Divider />
                      <LikeCommentButton
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
              keyExtractor={(item) => {item.toString()}}
            />
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
});

export default HomeScreen;
