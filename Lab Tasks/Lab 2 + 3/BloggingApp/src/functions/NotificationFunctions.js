import { getAllData, getDataJSON, storeDataJSON } from "../functions/AsyncStorageFunctions";
import * as firebase from "firebase";
import "firebase/firestore";

const getAllNotifications = async () => {
    let allData = await getAllData();
    let allNotifications = [];
    if (allNotifications != null) {
        for (let key of allData) {
            if (key.includes('notification')) {
                let notification = await getDataJSON(key);
                allNotifications.push(notification)
            }
        }
        return allNotifications;
    }
}

const addNotifications = async (userID, type) => {
    firebase
    .firestore()
    .collection('users')
    .doc(userID)
    .update({
      notifications: firebase.firestore.FieldValue.arrayUnion({
        ID: Math.random().toString(36).substring(7),
        sender: firebase.auth().currentUser.displayName,
        receiver: userID,
        created_at: firebase.firestore.Timestamp.now(),
        type: type,
      }),
    })
    .catch((error) => {
      alert(error);
    });
}
export { getAllNotifications, addNotifications };