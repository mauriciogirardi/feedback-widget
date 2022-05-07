import React, { useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { captureScreen } from "react-native-view-shot";
import { ArrowLeft } from "phosphor-react-native";
import * as FileSystem from "expo-file-system";

import { ScreenshotButton } from "../ScreenshotButton";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../Widget";
import { Button } from "../Button";
import { theme } from "../../theme";
import { api } from "../../libs/api";

import { styles } from "./styles";

interface FormProps {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSend: () => void;
}

export function Form({
  feedbackType,
  onFeedbackCanceled,
  onFeedbackSend,
}: FormProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [comment, setComment] = useState("");
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: "png",
      quality: 0.8,
    })
      .then(setScreenshot)
      .catch((err) => console.log(err));
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    if (isFetching) return;

    setIsFetching(true);

    const screenshotBase64 =
      screenshot &&
      (await FileSystem.readAsStringAsync(screenshot, { encoding: "base64" }));

    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        comment,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
      });

      onFeedbackSend();
    } catch (e) {
      console.error(e);
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image style={styles.image} source={feedbackTypeInfo.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        style={styles.input}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onRemoveShot={handleScreenshotRemove}
          onTakeShot={handleScreenshot}
          screenshot={screenshot}
        />

        <Button isLoading={isFetching} onPress={handleSendFeedback} />
      </View>
    </View>
  );
}
