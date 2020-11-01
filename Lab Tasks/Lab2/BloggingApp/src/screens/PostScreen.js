import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Card } from "react-native-elements";
import PostCard from "./../components/PostCard";

import { AuthContext } from "../providers/AuthProvider";

import { storeDataJSON } from "../functions/AsyncStorageFunctions";
import { getDataJSON } from "../functions/AsyncStorageFunctions";
import { getAllComments } from "../functions/PostFunctions";

import HeaderTop from "./../components/HeaderTop";
import InputCard from "../components/InputCard";

const PostScreen = (props) => {
  const postID = props.route.params.postId;
  const [commentID, setCommentID] = useState([]);
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
    let response = await getAllComments();
    if (response != null) {
      return response;
    }
  };

  const getName = (id) => {
    let Name = "";
    users.forEach((element) => {
      if (element.id == id) Name = element.name;
    });
    return Name;
  };

  useEffect(() => {
    loadIndividualPost().then((response) => {
      setPosts(JSON.parse(response));
    });
    loadComments().then((response) => {
      setComments(response);
    });
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
                        />
                      </Card>
                    </View>
                  );}
                }
              }
              keyExtractor={(item) => {
                item.toString();
              }}
            />
            
            <Card>
              <InputCard
                Text="Post a Comment"
                currentFunc={setInput}
                currentText={input}
                pressFunction={async () => {
                  setCommentID([
                    auth.CurrentUser.id +
                      "-comment-" +
                      Math.random().toString(36).substring(7),
                  ]);
                  let currentComment = {
                    post: postID,
                    commentId: commentID,
                    commneterID: auth.CurrentUser.username,
                    commenter: auth.CurrentUser.name,
                    comment: input,
                  };
                  storeDataJSON(
                    JSON.stringify(commentID),
                    JSON.stringify(currentComment)
                  );
                  let UserData = await getDataJSON(JSON.stringify(commentID));
                  console.log(UserData);
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