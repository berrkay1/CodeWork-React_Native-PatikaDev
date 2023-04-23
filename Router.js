import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Job from "./src/pages/Job";
import FavoritedJobs from "./src/pages/FavoritedJobs";
import JobDetail from "./src/pages/JobDetail";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const JobStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Job" component={Job} options={{
        headerShown:false
      }} />
      <Stack.Screen name="JobDetail" component={JobDetail} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "#F27976",
          headerTitleStyle: { fontSize: 21 },
        }}
      >
        <Drawer.Screen name="JobScreen" component={JobStack} />
        <Drawer.Screen name="Favorited Jobs" component={FavoritedJobs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
