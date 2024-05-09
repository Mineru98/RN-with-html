import { memo } from "react";
import isEqual from "react-fast-compare";
import { createStackNavigator } from "@react-navigation/stack";
import SearchView from "components/search";
import ExternalLinkView from "components/externalLink";
import { ScreenTypes } from "config/screen_types";

const Stack = createStackNavigator();

function SearchScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SearchView" component={SearchView} />
      <Stack.Screen
        name={ScreenTypes.EXTERNAL_LINK}
        component={ExternalLinkView}
      />
    </Stack.Navigator>
  );
}

export default memo(SearchScreen, isEqual);
