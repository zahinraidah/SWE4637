import * as firebase from "firebase";
import "firebase/firestore";

import { addNotifications } from "../functions/NotificationFunctions";


const addLike = (postID, userID, likes) => {
    firebase
        .firestore()
        .collection('posts')
        .doc(postID)
        .update({
            likes: likes + 1,
        });

        addNotifications(userID, "like")
}

const removeLike = async (postID, userID, likes) => {
    firebase
        .firestore()
        .collection('posts')
        .doc(postID)
        .update({
            likes: likes - 1,
        });

        //remove notifications
}
export { addLike, removeLike }