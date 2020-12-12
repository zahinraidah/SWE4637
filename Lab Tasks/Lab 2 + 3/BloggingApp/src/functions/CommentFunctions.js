import * as firebase from "firebase";
import "firebase/firestore";

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

const saveComment = async (postID, receiver, commenterName, input) => {
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
            alert ('Comment created successfully!');
        })
        .catch((error) => {
            setLoading(false);
            alert(error);
        });
}

const deleteComment = async (ID) => {
    firebase
        .firestore()
        .collection('comments')
        .doc(ID)
        .delete()
        .then(() => {
            alert('Comment deleted!');
        });
}

export { getAllComments, saveComment, deleteComment };