import { Camera, Trash } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({
  screenshot,
  onRemoveShot,
  onTakeShot,
}: ScreenshotButtonProps) {
  return (
    <TouchableOpacity
      onPress={screenshot ? onRemoveShot : onTakeShot}
      style={styles.container}
    >
      {screenshot ? (
        <View>
          <Image style={styles.image} source={{ uri: screenshot }} />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_secondary} weight="bold" />
      )}
    </TouchableOpacity>
  );
}
