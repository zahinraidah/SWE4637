import { getAllData, getDataJSON, storeDataJSON } from "../functions/AsyncStorageFunctions";

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

const addNotifications = async (notify, reciever, sender, type) => {
    let currentNotification = {
        notifyID: notify,
        reciever: reciever,
        sender: sender,
        type: type
      };

      storeDataJSON(
        JSON.stringify(notify),
        JSON.stringify(currentNotification)
      );
      let UserData2 = await getDataJSON(JSON.stringify(notify));
      console.log(UserData2);
}
export { getAllNotifications, addNotifications };