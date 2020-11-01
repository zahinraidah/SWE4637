import { AsyncStorage } from "react-native";
import { getAllData, getDataJSON } from "../functions/AsyncStorageFunctions";

const getAllPosts = async () => {
    let keys = await getAllData();
    let Allposts = [];
    try {
        if (keys != null) {
            for (let key of keys) {
                if (key.includes('post')) {
                    let post = await getDataJSON(key);
                    Allposts.push(post);
                }
            }
            return Allposts;
        }
    } catch (error) {
        alert(error);
    }
}

const getAllComments = async () => {
    let keys = await getAllData();
    let Allposts = [];
    try {
        if (keys != null) {
            for (let key of keys) {
                if (key.includes('comment')) {
                    let post = await getDataJSON(key);
                    Allposts.push(post);
                }
            }
            return Allposts;
        }
    } catch (error) {
        alert(error);
    }
}
export {getAllPosts, getAllComments};