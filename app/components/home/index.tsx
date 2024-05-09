import { memo, useCallback, useRef } from "react";
import { View } from "react-native";
import IsEqual from "react-fast-compare";
import { WebView } from "react-native-webview";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import {
  PermissionedParamsList,
  ScreenTypes,
  HomeParamsList,
} from "config/screen_types";

type ScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<PermissionedParamsList, ScreenTypes.STACK_HOME>,
  StackNavigationProp<HomeParamsList>
>;

function HomeView({ navigation }) {
  const webViewRef = useRef<WebView>(null);
  // const navigation = useNavigation<ScreenNavigationProps>();

  const sendMsg = useCallback(() => {
    const item = JSON.stringify({
      type: "MOVE",
      data: "업데이트 하세요",
    });
    webViewRef.current.postMessage(item);
  }, [webViewRef]);

  const hanlderMessage = useCallback((e) => {
    const { data, type } = JSON.parse(e.nativeEvent.data);
    if (type === "MOVE") {
      navigation.navigate(data);
    } else if (type === "URL") {
      navigation.push(ScreenTypes.EXTERNAL_LINK, { url: data });
    }
  }, []);

  return (
    <View style={styles.bgContainer}>
      <WebView
        ref={webViewRef}
        style={styles.container}
        originWhitelist={["*"]}
        source={{
          // uri: "http://172.30.1.9:3000/",
          uri: "http://172.17.47.231:3000/",
        }}
        onMessage={hanlderMessage}
      />
    </View>
  );
}

export default memo(HomeView, IsEqual);
