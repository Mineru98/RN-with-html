import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomePage, LikesPage, SettingPage, SearchPage } from "pages";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
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
          name="Home"
          component={HomePage}
          options={{
            title: "메인",
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchPage}
          options={{
            title: "검색",
          }}
        />
        <Tab.Screen
          name="Likes"
          component={LikesPage}
          options={{
            title: "좋아요",
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingPage}
          options={{
            title: "프로필",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
