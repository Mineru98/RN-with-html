import { memo } from "react";
import isEqual from "react-fast-compare";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import HomeView from "components/home";
import DetailView from "components/detail";
import ExternalLinkView from "components/externalLink";
import { ScreenTypes } from "config/screen_types";

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeView"
        component={HomeView}
        options={{
          title: "홈",
        }}
      />
      <Stack.Screen
        name="DetailView"
        component={DetailView}
        options={{
          title: "상세페이지",
        }}
      />
      <Stack.Screen
        name={ScreenTypes.EXTERNAL_LINK}
        component={ExternalLinkView}
        options={{
          headerShown: true,
          title: "외부링크",
        }}
      />
    </Stack.Navigator>
  );
}

export default memo(HomeScreen, isEqual);
