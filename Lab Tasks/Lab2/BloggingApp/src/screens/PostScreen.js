import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Card } from "react-native-elements";
import PostCard from "./../components/PostCard";

import { AuthContext } from "../providers/AuthProvider";

import { storeDataJSON } from "../functions/AsyncStorageFunctions";
import { getDataJSON } from "../functions/AsyncStorageFunctions";

import { getPosts } from "./../requests/Posts";
import { getUsers } from "./../requests/Users";
import { getComments } from "../requests/Comments";

import HeaderTop from "./../components/HeaderTop";
import InputCard from "../components/InputCard";

const PostScreen = (props) => {
  const postID = props.route.params.postId;
  const [commentID, setCommentID] = useState([]);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
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

  const loadComments = async () => {
    const response = await getComments(postID);
    if (response.ok) {
      setComments(response.data);
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
    //loadPosts();
    loadUsers();
    loadComments();
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
            {/* <PostCard
            author={getName(auth.CurrentPost.postID)}
            title={auth.CurrentPost.userID}
            body={item.body}
            /> */}
            <FlatList
              data={comments}
              renderItem={function ({ item }) {
                return (
                  <View>
                    <Card>
                      <PostCard
                        author={getName(item.id)}
                        title={item.name}
                        body={item.body}
                      />
                    </Card>
                  </View>
                );
              }}
            />
            <Card>
              <InputCard Text="Post a Comment"
                currentFunc={setInput}
                currentText={input}
                pressFunction={async () => {
                  setCommentID([auth.CurrentUser.id + "-comment-" + Math.random().toString(36).substring(7)])
                  let currentComment = {
                    postId: postID,
                    id: commentID,
                    name: auth.CurrentUser.name,
                    body: input,
                  };
                  storeDataJSON(
                    JSON.stringify(commentID),
                    JSON.stringify(currentComment)
                  );
                  let UserData = await getDataJSON(JSON.stringify(commentID));
                  console.log(UserData);
                }} />
            </Card>
          </View>
        )}
      </AuthContext.Consumer>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="red" animating={true} />
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

export default PostScreen;