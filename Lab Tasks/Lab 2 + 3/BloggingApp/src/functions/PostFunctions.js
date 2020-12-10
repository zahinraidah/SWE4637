import { AsyncStorage } from "react-native";
import React, { useState, useEffect } from "react";
import { getAllData, getDataJSON, storeDataJSON } from "../functions/AsyncStorageFunctions";
import { AuthContext } from "../providers/AuthProvider";

import * as firebase from "firebase";
import "firebase/firestore";

const getAllPosts = async () => {
    firebase
        .firestore()
        .collection("posts")
        .orderBy("created_at", "desc")
        .onSnapshot((querySnapshot) => {
            let allPosts = [];
            querySnapshot.forEach((doc) => {
                allPosts.push({
                    id: doc.id,
                    data: doc.data(),
                });
            });
            return allPosts;
        });
}

const savePost = async (userId, input, displayName) => {
    firebase
        .firestore()
        .collection("posts")
        .add({
            userId: userId,
            body: input,
            author: displayName,
            created_at: firebase.firestore.Timestamp.now(),
            likes: 0,
            comments: [],
        })
        .then(() => {
            setLoading(false);
            alert("Post created Successfully!");
        })
        .catch((error) => {
            setLoading(false);
            alert(error);
        });;
}


const getAllComments = async () => {
    let keys = await getAllData();
    let allComments = [];
    try {
        if (keys != null) {
            for (let key of keys) {
                if (key.includes('comment')) {
                    let comment = await getDataJSON(key);
                    allComments.push(comment);
                }
            }
            return allComments;
        }
    } catch (error) {
        alert(error);
    }
}

const saveComment = async (postID, postAuthor, commentID, commneterID, commenterName, input) => {

    let currentComment = {
        post: postID,
        reciever: postAuthor,
        commentId: commentID,
        commneterID: commneterID,
        commenter: commenterName,
        comment: input,
    };

    storeDataJSON(
        JSON.stringify(commentID),
        JSON.stringify(currentComment)
    );

    alert("Comment Saved!")
    let UserData = await getDataJSON(JSON.stringify(commentID));
    console.log(UserData);
}
export { getAllPosts, getAllComments, savePost, saveComment };