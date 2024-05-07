import { createStackNavigator } from "@react-navigation/stack";
import SettingView from "components/setting";

const Stack = createStackNavigator();

export default function SettingPage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Setting" component={SettingView} />
    </Stack.Navigator>
  );
}
