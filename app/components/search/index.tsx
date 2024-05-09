import { memo, useCallback, useRef } from "react";
import { View } from "react-native";
import IsEqual from "react-fast-compare";
import { WebView } from "react-native-webview";
import styles from "./styles";

function SearchView({ navigation }) {
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
          // uri: "http://172.30.1.9:3000/search",
          uri: "http://172.17.47.231:3000/search",
        }}
        onMessage={hanlderMessage}
      />
    </View>
  );
}

export default memo(SearchView, IsEqual);
