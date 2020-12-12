import * as firebase from "firebase";
import "firebase/firestore";
import { useCallback } from "react";

const getAllComments = async (post) => {
    firebase
        .firestore()
        .collection('posts')
        .doc(post)
        .onSnapshot((querySnapshot) => {
            let temp_comments = [];
            querySnapshot.data().comments.forEach((doc) => {
                temp_comments.push(doc);
            })
            return temp_comments;
        });
}

const saveComment = (postID, receiver, commenterName, input) => {
    console.log(postID);
    firebase
        .firestore()
        .collection('posts')
        .doc(postID)
        .update({
            comments: firebase.firestore.FieldValue.arrayUnion({
                comment: input,
                commenter: commenterName,
                receiver: receiver,
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
}

const deleteComment = async (ID) => {
    firebase
        .firestore()
        .collection('posts')
        .doc(ID)
        .update({
            comments: firebase.firestore.FieldValue.delete(),
        })
        .then(() => {
            alert('Comment deleted!');
        })
}

export { getAllComments, saveComment, deleteComment };