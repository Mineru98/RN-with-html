import { useRef } from "react";
import { WebView } from "react-native-webview";
import styles from "./styles";

export default function LikesPage() {
  const webViewRef = useRef<WebView>(null);
  return (
    <WebView
      ref={webViewRef}
      style={styles.container}
      originWhitelist={["*"]}
      source={{
        uri: "http://192.168.1.176:3000/likes",
      }}
    />
  );
}
