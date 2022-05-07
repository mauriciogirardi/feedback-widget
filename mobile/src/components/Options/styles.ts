import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  options: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 48,
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    marginBottom: 32,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});
