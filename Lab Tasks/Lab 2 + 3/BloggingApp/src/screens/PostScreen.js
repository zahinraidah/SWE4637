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
  let item = props.route.params;
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
      .doc(item.id)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setPosts(documentSnapshot.data());
        }
      });
  };

  const loadComments = async () => {
    setLoading(true);
    firebase
      .firestore()
      .collection('posts')
      .doc(item.id)
      .onSnapshot((querySnapshot) => {
        let temp_comments = [];
        querySnapshot.data().comments.forEach((doc) => {
          temp_comments.push(doc);
        });
        setComments(temp_comments);
        setLoading(false);
      });
  };

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
                              author={item.commenter}
                              body={item.comment}
                              removeFunc={async () => {
                                firebase
                                  .firestore()
                                  .collection('posts')
                                  .doc(info.postId)
                                  .update({
                                    comments: firebase.firestore.FieldValue.arrayRemove(item.ID),
                                })
                                  .then(() => {
                                    alert('Comment deleted!');
                                  });
                              }}
                            />
                          </Card>
                        </View>
                      );
                    }}
                    keyExtractor={(item, index) => index.toString()}
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
                      .doc(item.id)
                      .update({
                        comments: firebase.firestore.FieldValue.arrayUnion({
                          ID: Math.random().toString(36).substring(7),
                          comment: input,
                          commenter: auth.CurrentUser.displayName,
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

                      firebase
                      .firestore()
                      .collection('users')
                      .doc(item.data.userId)
                      .update({
                        notifications: firebase.firestore.FieldValue.arrayUnion({
                          ID: Math.random().toString(36).substring(7), 
                          sender: auth.CurrentUser.displayName,
                          receiver: auth.CurrentUser.uid,
                          created_at: firebase.firestore.Timestamp.now(),
                          type: "comment",
                        }),
                      })
                      .then(() => {
                        setLoading(false);
                      })
                      .catch((error) => {
                        setLoading(false);
                        alert(error);
                      });
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