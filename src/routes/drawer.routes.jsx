import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";

const Drawer = createNativeStackNavigator();

const DrawerRoutes = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    );
  };
  
  export default DrawerRoutes;