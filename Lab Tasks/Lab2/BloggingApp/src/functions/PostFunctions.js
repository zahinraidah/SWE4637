import { AsyncStorage } from "react-native";
import React, { useState, useEffect } from "react";
import { getAllData, getDataJSON, storeDataJSON } from "../functions/AsyncStorageFunctions";
import { AuthContext } from "../providers/AuthProvider";

const getAllPosts = async () => {
    let keys = await getAllData();
    let allposts = [];
    try {
        if (keys != null) {
            for (let key of keys) {
                if (key.includes('post')) {
                    let post = await getDataJSON(key);
                    allposts.push(post);
                }
            }
            return allposts;
        }
    } catch (error) {
        alert(error);
    }
}

const savePost = async (username, name, postID, input) => {
    let currentPost = {
        username: username,
        name: name,
        postID: postID,
        post: input,
        likes: 0,
    };
    storeDataJSON(
        JSON.stringify(postID),
        JSON.stringify(currentPost)
    );

    let UserData = await getDataJSON(JSON.stringify(postID));
    console.log(UserData);
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
      let UserData = await getDataJSON(JSON.stringify(commentID));
      console.log(UserData);
}
export { getAllPosts, getAllComments, savePost, saveComment };