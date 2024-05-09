import { memo, useCallback, useRef } from "react";
import { View } from "react-native";
import IsEqual from "react-fast-compare";
import { WebView } from "react-native-webview";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import {
  PermissionedParamsList,
  ScreenTypes,
  LikesParamsList,
} from "config/screen_types";
import styles from "./styles";

type ScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<PermissionedParamsList, ScreenTypes.STACK_LIKES>,
  StackNavigationProp<LikesParamsList>
>;

function LikesView(): JSX.Element {
  const webViewRef = useRef<WebView>(null);
  const navigation = useNavigation<ScreenNavigationProps>();

  const sendMsg = useCallback(() => {
    const item = JSON.stringify({
      type: "MOVE",
      data: "업데이트 하세요",
    });
    webViewRef.current.postMessage(item);
  }, [webViewRef]);

  const hanlderMessage = useCallback(
    (e) => {
      const { data, type } = JSON.parse(e.nativeEvent.data);
      if (type === "MOVE") {
        navigation.navigate(data);
      }
    },
    [navigation]
  );

  return (
    <View style={styles.bgContainer}>
      <WebView
        ref={webViewRef}
        style={styles.container}
        originWhitelist={["*"]}
        source={{
          // uri: "http://172.30.1.9:3000/likes",
          uri: "http://172.17.47.231:3000/likes",
        }}
        onMessage={hanlderMessage}
      />
    </View>
  );
}

export default memo(LikesView, IsEqual);
