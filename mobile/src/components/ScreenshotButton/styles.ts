import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.surface_secondary,
    marginRight: 8,
    position: "relative",
  },

  removeIcon: {
    position: "absolute",
    bottom: -8,
    left: -8,
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
});
