import { memo } from "react";
import isEqual from "react-fast-compare";
import { createStackNavigator } from "@react-navigation/stack";
import SettingView from "components/setting";
import ExternalLinkView from "components/externalLink";
import { ScreenTypes } from "config/screen_types";

const Stack = createStackNavigator();

function SettingScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SettingView" component={SettingView} />
      <Stack.Screen
        name={ScreenTypes.EXTERNAL_LINK}
        component={ExternalLinkView}
      />
    </Stack.Navigator>
  );
}

export default memo(SettingScreen, isEqual);
