import { AsyncStorage } from "react-native";
import { getAllData, getDataJSON } from "../functions/AsyncStorageFunctions";
import { AuthContext } from "../providers/AuthProvider";
import { getAllComments } from "./PostFunctions";

const getAllNotifications = async () => {
    let allComment  = await getAllComments();
    let Allposts = [];
        if (allComment != null) {
            for (let key of allComment) {
                    let post = await getDataJSON(key);
                    Allposts.push(post)
            }
            return Allposts;
        }
}

const addNotifications = async (data) => {
    try {
        if (data != null) {
            data = await storeDataJSON(key);
        }

    } catch (error) {
        alert(error);
    }
}
export { getAllNotifications, addNotifications };