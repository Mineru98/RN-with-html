import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeScreen, LikesScreen, SettingScreen, SearchScreen } from "screen";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Likes") {
              iconName = focused ? "heart-sharp" : "heart-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#1D232F",
          tabBarInactiveTintColor: "#898DA4",
        })}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "메인",
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            title: "검색",
          }}
        />
        <Tab.Screen
          name="LikesScreen"
          component={LikesScreen}
          options={{
            title: "좋아요",
          }}
        />
        <Tab.Screen
          name="SettingsScreen"
          component={SettingScreen}
          options={{
            title: "프로필",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
