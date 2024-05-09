import { StyleSheet, StatusBar, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const StatusBarHeight =
  Platform.OS === "ios" ? getStatusBarHeight(true) : StatusBar.currentHeight;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    paddingTop: StatusBarHeight,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
