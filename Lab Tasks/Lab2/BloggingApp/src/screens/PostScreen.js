import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Card } from "react-native-elements";
import PostCard from "./../components/PostCard";

import { AuthContext } from "../providers/AuthProvider";

import { getDataJSON, removeData } from "../functions/AsyncStorageFunctions";
import { getAllComments, saveComment } from "../functions/PostFunctions";
import { addNotifications } from "../functions/NotificationFunctions";

import HeaderTop from "./../components/HeaderTop";
import InputCard from "../components/InputCard";

const PostScreen = (props) => {
  const postID = props.route.params.postId;
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState([]);

  const loadIndividualPost = async () => {
    let response = await getDataJSON(JSON.stringify(postID));
    if (response != null) {
      return response;
    }
  };

  const loadComments = async () => {
    setLoading(true);
    let response = await getAllComments();
    if (response != null) {
      setComments(response);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadIndividualPost().then((response) => {
      setPosts(JSON.parse(response));
    });
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

            <Card>
              <PostCard
                author={posts.name}
                body={posts.post}
              />
            </Card>
            
            <FlatList
              data={comments}
              onRefresh={loadComments}
              refreshing={loading}
              renderItem={function ({ item }) {
                let data = JSON.parse(item);
                if(JSON.stringify(data.post) === JSON.stringify(postID)){
                  return (
                    <View>
                      <Card>
                        <PostCard
                          author={data.commenter}
                          body={data.comment}
                          removeFunc={async () => {
                            await removeData(JSON.stringify(data.commentId))
                          }}
                        />
                      </Card>
                    </View>
                  );}
                }
              }
              keyExtractor={(item, index) => index.toString()}
            />
            
            <Card>
              <InputCard
                Text="Post a Comment"
                currentFunc={setInput}
                currentText={input}
                pressFunction={async () => {
                  saveComment(
                    postID, 
                    posts.name, 
                    auth.CurrentUser.username + "-comment-" + Math.random().toString(36).substring(7),
                    auth.CurrentUser.username, 
                    auth.CurrentUser.name, 
                    input)

                  addNotifications(
                    auth.CurrentUser.username + "-notification-" + Math.random().toString(36).substring(7),
                    posts.name,
                    auth.CurrentUser.name,
                    "comment"
                    )
                }}
              />
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