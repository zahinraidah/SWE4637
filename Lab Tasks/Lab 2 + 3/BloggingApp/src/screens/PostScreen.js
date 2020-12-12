import React, { useState, useEffect } from "react";
import { LogBox, View, StyleSheet, FlatList, ActivityIndicator, ScrollView, ImageBackground } from "react-native";
import { Card } from "react-native-elements";
import PostCard from "./../components/PostCard";

import { AuthContext } from "../providers/AuthProvider";

import { getDataJSON, removeData } from "../functions/AsyncStorageFunctions";
import { getAllComments, saveComment, deleteComment } from "../functions/CommentFunctions";
import { addNotifications } from "../functions/NotificationFunctions";

import HeaderTop from "./../components/HeaderTop";
import InputCard from "../components/InputCard";

import * as firebase from "firebase";
import "firebase/firestore";

const PostScreen = (props) => {
  const postID = props.route.params.postId;
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState([]);

  const image = { uri: "https://cdn.hipwallpaper.com/i/97/16/ZcjRI9.jpg" };
  const loadSinglePost = async () => {
    setLoading(true);
    firebase
      .firestore()
      .collection('posts')
      .doc(postID)
      .get()
      .then((response) => {
        setPosts(response);
        setLoading(false);
      }
      )
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  const loadComments = async () => {
    setLoading(true);
    firebase
      .firestore()
      .collection("posts")
      .orderBy("created_at", "desc")
      .onSnapshot((querySnapshot) => {
        let temp_posts = [];
        querySnapshot.forEach((doc) => {
          temp_posts.push({
            id: doc.id,
            data: doc.data().comments,
          });
        });
        setComments(temp_posts);
        setLoading(false);
      });
  };
  console.log(comments);
  useEffect(() => {
    loadSinglePost();
    loadComments();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Setting a timer for a long period of time']);
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
                <Card.Title>Post</Card.Title>
                <PostCard
                  author={posts.author}
                  body={posts.body}
                />
              </Card>

              <ScrollView>
                <Card>
                  <Card.Title>Comments</Card.Title>
                  <FlatList
                    data={comments}
                    renderItem={({ item }) => {
                      return (
                        <View>
                          <Card>
                            <PostCard
                              author={item.data.commenter}
                              title={item.id}
                              body={item.data.comment}
                              removeFunc={async () => {
                                deleteComment(item.id);
                              }}
                            />
                          </Card>
                        </View>
                      );
                    }}
                  />
                </Card>
              </ScrollView>
              <Card>
                <InputCard
                  Text="Post a Comment"
                  currentFunc={setInput}
                  currentText={input}
                  pressFunction={async () => {
                    firebase
                      .firestore()
                      .collection('posts')
                      .doc(postID)
                      .update({
                        comments: firebase.firestore.FieldValue.arrayUnion({
                          comment: input,
                          commenter: auth.CurrentUser.displayName,
                          receiver: auth.CurrentUser.uid,
                          created_at: firebase.firestore.Timestamp.now(),
                        }),
                      })
                      .then(() => {
                        setLoading(false);
                        alert('Comment created successfully!');
                      })
                      .catch((error) => {
                        setLoading(false);
                        alert(error);
                      });

                    // saveComment(
                    //   postID,
                    //   input,
                    //   auth.CurrentUser.name,
                    //   posts.data.author
                    // )

                    // addNotifications(
                    //   auth.CurrentUser.username + "-notification-" + Math.random().toString(36).substring(7),
                    //   posts.name,
                    //   auth.CurrentUser.name,
                    //   "comment"
                    // )
                  }}
                />
              </Card>
            </ImageBackground>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default PostScreen;