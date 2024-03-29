import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { Header } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Profile" component={Profile}/>

        </Tab.Navigator>
    )
}

export default TabRoutes;