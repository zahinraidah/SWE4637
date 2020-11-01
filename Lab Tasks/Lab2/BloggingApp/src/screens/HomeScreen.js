import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { useNetInfo } from "@react-native-community/netinfo";

import { storeDataJSON } from "../functions/AsyncStorageFunctions";
import { getDataJSON } from "../functions/AsyncStorageFunctions";
import {getAllPosts} from "../functions/PostFunctions";

import { AuthContext } from "../providers/AuthProvider";
import { getPosts } from "./../requests/Posts";
import { getUsers } from "./../requests/Users";

import PostCard from "./../components/PostCard";
import HeaderTop from "./../components/HeaderTop";
import InputCard from "../components/InputCard";
import LikeCommentButton from "../components/LikeCommentButton";
import Loading from "../components/Loading";

import PostScreen from "../screens/PostScreen"; 

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
  };

  const loadUsers = async () => {
    const response = await getUsers();
    if (response.ok) {
      setUsers(response.data);
    }
    setLoading(false);
  };
  const getName = (id) => {
    let Name = "";
    users.forEach((element) => {
      if (element.id == id) Name = element.name;
    });
    return Name;
  };

  useEffect(() => {
    loadPosts();
    loadUsers();
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
                  setpostID([auth.CurrentUser.id + "-post-" + Math.random().toString(36).substring(7)]);
                  let currentPost = {
                    userId: auth.CurrentUser.id,
                    Id: postID,
                    body: input,
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
              renderItem={function ({ item }) {
                let data = JSON.parse(item)
                return (
                  <View>
                    <Card>
                      <PostCard
                        author={data.userId}
                        title={data.Id}
                        body={data.body}
                      />
                      <Card.Divider />
                      <LikeCommentButton
                        navigateFunc={() => {
                          props.navigation.navigate("PostScreen", {
                            postId: data.Id,
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
