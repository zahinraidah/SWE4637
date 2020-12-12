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
        let temp_posts = [];
        querySnapshot.forEach((doc) => {
          temp_posts.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        return temp_posts;
      })
      .catch((error) => {
        alert(error);
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
            alert("Post created Successfully!");
        })
        .catch((error) => {
            alert(error);
        });;
}

const deletePost = async (ID) => {
    firebase
        .firestore()
        .collection('posts')
        .doc(ID)
        .delete()
        .then(() => {
            alert('Post deleted!');
        });
}

export { getAllPosts, savePost, deletePost };