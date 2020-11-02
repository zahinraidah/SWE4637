import { getAllData, getDataJSON, removeData } from "../functions/AsyncStorageFunctions";

const getUserInfo = async (name) => {
    let allData = await getAllData();
    let userInfo = [];
    if (allData != null) {
        for (let data of allData) {
            if (data.includes(name)) {
                let info = await getDataJSON(data);
                userInfo.push(info)
            }
        }
        console.log(userInfo)
        return userInfo;
    }
}

const deleteUserInfo = async (name) => {
    let allData = await getUserInfo(name);
    let userInfo = [];
    if (allData != null) {
        for (let data of allData) {
            await removeData(data);
        }
    }
}

export { getUserInfo, deleteUserInfo };