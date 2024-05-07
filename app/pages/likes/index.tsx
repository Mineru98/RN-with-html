import { createStackNavigator } from "@react-navigation/stack";
import LikesView from "components/likes";

const Stack = createStackNavigator();

export default function LikesPage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Likes" component={LikesView} />
    </Stack.Navigator>
  );
}
