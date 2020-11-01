import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, Card, Button, Image } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import { AntDesign } from '@expo/vector-icons';
import { clearAllData } from "../functions/AsyncStorageFunctions";
import HeaderTop from "../components/HeaderTop";
import { getAllPosts } from "../functions/PostFunctions";
import PostCard from "./../components/PostCard";
import LikeCommentButton from "../components/LikeCommentButton";


const ProfileScreen = (props) => {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    let response = await getAllPosts();
    if (response != null) {
      setPosts(response);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

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
            <View style={{ alignItems: "center" }}>
              <Image source={require("../../assets/profile.jpg")} style={styles.imageStyle} />
              <Text style={{ fontSize: 32 }}>
                {auth.CurrentUser.name}
              </Text>
            </View>
          </Card>
          <Button
            buttonStyle={{ backgroundColor: '#e02f2f' }}
            containerStyle={{ width: 150, marginLeft: 120, marginRight: 10, marginTop: 15 }}
            titleStyle={{ marginLeft: 5 }}
            title="Delete User"
            type='solid'
            alignSelf='center'
            icon={<AntDesign name="deleteuser" size={24} color="white" />}
            onPress={async () => {
              //clearAllData();
              removeData(auth.CurrentUser.username);
              auth.setIsLoggedIn(false);
              auth.setCurrentUser({});
            }}
          />
          <Card>
            <View>
              <Text style={{ alignSelf: "center", fontSize: 18 }}>
                Born on: July 29, 2000 {"\n"}
                  Address: Chandpur, Bangladesh {"\n"}
                  Studying at IUT {"\n"}
                  Likes Cats {"\n"}
                  Hates people
              </Text>
            </View>
          </Card>
          <FlatList
            data={posts}
            renderItem={function ({ item }) {
              let data = JSON.parse(item)
              if (JSON.stringify(data.username) === JSON.stringify(auth.CurrentUser.username)) {
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
                            postId: data.Id,
                          });
                        }}
                      />
                    </Card>
                  </View>
                );
              }
            }}
            keyExtractor={(item) => { item.toString() }}
          />
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
  },
  imageStyle: {
    height: 200,
    width: 200,
    margin: 5,
  },
});

export default ProfileScreen;