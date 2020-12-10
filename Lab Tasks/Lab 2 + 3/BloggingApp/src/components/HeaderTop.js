import React from "react";
import { Header } from "react-native-elements";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AuthContext } from "../providers/AuthProvider";
const HeaderTop = (props) => {
    const icon = [<MaterialCommunityIcons name="logout-variant" size={24} color="black" />]
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <Header
                    leftComponent={{
                        icon: "menu",
                        color: "#fff",
                        onPress: props.DrawerFunction,
                    }}
                    centerComponent={{ text: "React Native Blog Application", style: { color: "#fff" } }}
                    rightComponent={<MaterialCommunityIcons name="logout-variant" size={24} color="white"
                        onPress={() => {
                            auth.setIsLoggedIn(false);
                            auth.setCurrentUser({});
                        }} />}
                />
            )}
        </AuthContext.Consumer>
    );
};

export default HeaderTop;