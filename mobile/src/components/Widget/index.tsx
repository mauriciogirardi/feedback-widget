import React, { useRef, useState } from "react";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { ChatTeardropDots } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { Options } from "../Options";
import { Success } from "../Success";
import { styles } from "./styles";
import { theme } from "../../theme";
import { Form } from "../Form";

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  function handleFeedbackSend() {
    setFeedbackSend(true);
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots size={24} color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {feedbackSend ? (
          <Success onSendAnotherFeedback={handleRestartFeedback} />
        ) : (
          <>
            {feedbackType ? (
              <Form
                feedbackType={feedbackType}
                onFeedbackCanceled={handleRestartFeedback}
                onFeedbackSend={handleFeedbackSend}
              />
            ) : (
              <Options onFeedbackTypeChanged={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
