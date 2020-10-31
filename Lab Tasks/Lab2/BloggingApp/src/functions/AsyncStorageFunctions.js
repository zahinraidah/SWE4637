import { AsyncStorage } from "react-native";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    alert("Data STored Successfully!");
  } catch (error) {
    alert(error);
  }
};

const storeDataJSON = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    alert("Data Stored Successfully!");
  } catch (error) {
    alert(error);
  }
};

const getData = async (key) => {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data != null) {
      return data;
    } else {
      alert("No data with this key!");
    }
  } catch (error) {
    alert(error);
  }
};

const getDataJSON = async (key) => {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data != null) {
      const jsonData = JSON.parse(data);
      return jsonData;
    } else {
      alert("No data with this key!");
    }
  } catch (error) {
    alert(error);
  }
};

const getSpecificData = async (string) => {
  let data = []
  let keys = []
  try {
    data = await AsyncStorage.getAllKeys();
    data.forEach((i) => {
      if (i.includes(string)) {
        i = i.replace(/"/g,"")
        i = i.replace(/\[/g,"")
        i = i.replace(/\]/g,"")
        keys.push(i)
      }
    });
    if (keys != null) {
      return keys;
    } else {
      alert("No data with this key!");
    }
  } catch (error) {
    alert(error);
  }
};

const getAllData = async () => {
  let data = []
  try {
    data = await AsyncStorage.getAllKeys();
    if (data != null) {
      return data;
    } else {
      alert("No data with this key!");
    }
  } catch (error) {
    alert(error);
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    alert("Data Removed Successfully");
  } catch (error) {
    alert(error);
  }
};

const clearAllData = async () => {
  try {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => alert("Data Removed Successfully"));
  } catch (error) {
    alert(error);
  }
};

export { storeData, storeDataJSON, getData, getDataJSON, getSpecificData, getAllData, removeData, clearAllData };
