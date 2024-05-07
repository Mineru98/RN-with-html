import { createStackNavigator } from "@react-navigation/stack";
import SearchView from "components/search";

const Stack = createStackNavigator();

export default function SearchPage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Search" component={SearchView} />
    </Stack.Navigator>
  );
}
