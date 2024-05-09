import { memo, useRef } from "react";
import { View } from "react-native";
import IsEqual from "react-fast-compare";
import { WebView } from "react-native-webview";
import type { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";
import {
  ScreenTypes,
  HomeParamsList,
  SearchParamsList,
  LikesParamsList,
  SettingsParamsList,
} from "config/screen_types";

type ExternalLinkRouteProp = RouteProp<
  HomeParamsList | SearchParamsList | LikesParamsList | SettingsParamsList,
  ScreenTypes.EXTERNAL_LINK
>;

function ExternalLinkView(): JSX.Element {
  const webViewRef = useRef<WebView>(null);
  const route = useRoute<ExternalLinkRouteProp>();

  return (
    <View style={styles.bgContainer}>
      <WebView
        ref={webViewRef}
        style={styles.container}
        originWhitelist={["*"]}
        source={{
          uri: route.params.url,
        }}
      />
    </View>
  );
}

export default memo(ExternalLinkView, IsEqual);
