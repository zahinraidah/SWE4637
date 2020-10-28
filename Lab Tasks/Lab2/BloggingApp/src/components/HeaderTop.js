import React from "react";
import { Header } from "react-native-elements";

import { AuthContext } from "../providers/AuthProvider";
const HeaderTop = (props) => {
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
                    rightComponent={{
                        icon: "lock-outline",
                        color: "#fff",
                        onPress: function () {
                            auth.setIsLoggedIn(false);
                            auth.setCurrentUser({});
                        },
                    }}
                />
            )}
        </AuthContext.Consumer>
    );
};

export default HeaderTop;