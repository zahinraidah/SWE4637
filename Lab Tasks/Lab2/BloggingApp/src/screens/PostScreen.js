import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Card, Button, Input } from "react-native-elements";
import PostCard from "./../components/PostCard";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { AuthContext } from "../providers/AuthProvider";

import { getPosts } from "./../requests/Posts";
import { getUsers } from "./../requests/Users";
import { getComments } from "../requests/Comments";

import HeaderTop from "./../components/HeaderTop";
import InputCard from "../components/InputCard";

const PostScreen = (props) => {
    const postID = props.route.params.postId
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);

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
        loadPosts();
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
                            <InputCard
                                Text="Post a Comment"
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
