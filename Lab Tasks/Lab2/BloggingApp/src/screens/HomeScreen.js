import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { useNetInfo } from "@react-native-community/netinfo"
import { storeDataJSON } from "../functions/AsyncStorageFunctions";

import { AuthContext } from "../providers/AuthProvider";
import { getPosts } from "./../requests/Posts";
import { getUsers } from "./../requests/Users";

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
  const [userID, setUserID] = useState([]);
  const [postID, setPostID] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState([]);

  const loadPosts = async () => {
    setLoading(true);
    const response = await getPosts();
    if (response.ok) {
      setPosts(response.data);
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
                textFunction={(currentInput) => {
                  setInput(currentInput);
                }}
                pressfFunction={() => {
                  let currentPost = {
                    userID: setUserID(auth.CurrentUser.userId),
                    postID: setPostID(auth.CurrentUser.postId),
                    post: input,
                  };
                  storeDataJSON(userID, currentPost);
                }}
              />
            </Card>
            <FlatList
              data={posts}
              renderItem={function ({ item }) {
                return (
                  <View>
                    <Card>
                      <PostCard
                        author={getName(item.userId)}
                        title={item.title}
                        body={item.body}
                      />
                      <Card.Divider />
                      <LikeCommentButton
                        postId={item.postId} />
                    </Card>
                  </View>
                );
              }}
            />
          </View>
        )
        }
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
