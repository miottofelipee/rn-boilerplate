import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import StackRoutes from "./stcak.routes";
import TabRoutes from "./tabs.routes";
import DrawerRoutes from "./drawer.routes";


export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}