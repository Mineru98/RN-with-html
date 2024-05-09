import { memo } from "react";
import isEqual from "react-fast-compare";
import { createStackNavigator } from "@react-navigation/stack";
import LikesView from "components/likes";
import ExternalLinkView from "components/externalLink";
import { ScreenTypes } from "config/screen_types";

const Stack = createStackNavigator();

function LikesScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LikesView" component={LikesView} />
      <Stack.Screen
        name={ScreenTypes.EXTERNAL_LINK}
        component={ExternalLinkView}
      />
    </Stack.Navigator>
  );
}

export default memo(LikesScreen, isEqual);
