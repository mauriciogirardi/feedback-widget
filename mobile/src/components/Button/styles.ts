import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    backgroundColor: theme.colors.brand,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },

  title: {
    color: theme.colors.text_primary,
    fontSize: 14,
    fontFamily: theme.fonts.medium,
  },
});
