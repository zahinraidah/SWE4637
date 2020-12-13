import * as firebase from "firebase";
import "firebase/firestore";
import { useCallback } from "react";
import { AsyncStorage } from "react-native";
import { addNotifications } from "../functions/NotificationFunctions";

const getAllComments = async (post) => {
    firebase
        .firestore()
        .collection('posts')
        .doc(post)
        .onSnapshot((querySnapshot) => {
            let temp_comments = [];
            querySnapshot.data().comments.forEach((doc) => {
                temp_comments.push(doc);
            });
            // console.log(temp_comments)
            return temp_comments;
        });
}

const saveComment = (postID, input, userID) => {
    firebase
        .firestore()
        .collection('posts')
        .doc(postID)
        .update({
            comments: firebase.firestore.FieldValue.arrayUnion({
                ID: Math.random().toString(36).substring(7),
                comment: input,
                commenter: firebase.auth().currentUser.displayName,
                created_at: firebase.firestore.Timestamp.now(),
            }),
        })
        .then(() => {
            alert('Comment created successfully!');
        })
        .catch((error) => {
            alert(error);
        });

        addNotifications(userID, "comment")

}

const deleteComment = async (item, ID, userID) => {
    if (item.commenter == firebase.auth().currentUser.displayName) {
        firebase
            .firestore()
            .collection('posts')
            .doc(ID)
            .update({
                comments: firebase.firestore.FieldValue.arrayRemove(item),
            })
            .then(() => {
                alert('Comment deleted!');
            });
        firebase
            .firestore()
            .collection('users')
            .doc(userID)
            .update({
                notifications: firebase.firestore.FieldValue.arrayRemove(item),
            });
    }
    else {
        alert("you are not the author of the comment!");
    }
}
export { getAllComments, saveComment, deleteComment }