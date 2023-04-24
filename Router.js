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
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "#ef5350",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="JobPage"
        component={Job}
        options={{ title: "JOBS" }}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={{ title: "DETAİL" }}
      />
    </Stack.Navigator>
  );
};

const FavouriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorited Jobs"
        component={FavoritedJobs}
        options={{ title: "FAVORITED" }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "#ef5350",
          headerTitleAlign: "center",
          drawerActiveBackgroundColor: "#ef5350",
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "white",
          drawerStyle: { backgroundColor: "#161b22" },
        }}
      >
        <Drawer.Screen name="JobScreen" component={JobStack} />
        <Drawer.Screen name="FavoritedScreen" component={FavouriteStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
