import { WebView } from "react-native-webview";
import { Button, StyleSheet, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StatusBar, Platform } from "react-native";
import { useCallback, useRef } from "react";

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

  return (
    <View style={styles.bgContainer}>
      <WebView
        ref={webViewRef}
        style={styles.container}
        originWhitelist={["*"]}
        source={{
          uri: "https://7131-61-76-249-87.ngrok-free.app",
        }}
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
