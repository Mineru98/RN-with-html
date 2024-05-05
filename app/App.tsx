import { useCallback, useRef } from "react";
import { WebView } from "react-native-webview";
import { StatusBar, Platform } from "react-native";
import { Button, StyleSheet, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const StatusBarHeight =
  Platform.OS === "ios" ? getStatusBarHeight(true) : StatusBar.currentHeight;

export default function App() {
  const webViewRef = useRef<WebView>(null);

  const sendMsg = useCallback(() => {
    const item = JSON.stringify({
      type: "MOVE",
      data: "업데이트 하세요",
    });
    webViewRef.current.postMessage(item);
  }, [webViewRef]);

  const hanlderMessage = useCallback((e) => {
    const data = JSON.parse(e.nativeEvent.data);
    console.log(data);
  }, []);

  return (
    <View style={styles.bgContainer}>
      <WebView
        ref={webViewRef}
        style={styles.container}
        originWhitelist={["*"]}
        source={{
          uri: "http://192.168.1.176:3000",
        }}
        onMessage={hanlderMessage}
      />
      <View style={styles.btn}>
        <Button
          title="테스트"
          onPress={() => {
            sendMsg();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    marginTop: StatusBarHeight,
    backgroundColor: "#1d232f",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
