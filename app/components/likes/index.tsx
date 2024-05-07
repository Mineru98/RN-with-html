import { useCallback, useRef } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import styles from "./styles";

export default function LikesView({ navigation }) {
  const webViewRef = useRef<WebView>(null);

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
    }
  }, []);

  return (
    <View style={styles.bgContainer}>
      <WebView
        ref={webViewRef}
        style={styles.container}
        originWhitelist={["*"]}
        source={{
          uri: "http://172.30.1.9:3000/likes",
        }}
        onMessage={hanlderMessage}
      />
    </View>
  );
}
