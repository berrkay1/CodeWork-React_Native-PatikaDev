import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Job from "./src/pages/Job";
import JobDetail from "./src/pages/JobDetail";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Job">
        <Drawer.Screen name="Job" component={Job} />
        <Drawer.Screen name="JobDetail" component={JobDetail} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
