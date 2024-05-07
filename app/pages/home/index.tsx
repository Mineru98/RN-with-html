import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "components/home";
import DetailView from "components/detail";

const Stack = createStackNavigator();

export default function HomePage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="DetailBokji" component={DetailView} />
    </Stack.Navigator>
  );
}
