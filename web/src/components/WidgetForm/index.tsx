import { useState } from "react";

import { FooterForm } from "./FooterForm";
import { HeaderForm } from "./HeaderForm";
import { LayoutForm } from "./LayoutForm";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep, FeedbackTypeProps } from "./Steps/FeedbackTypeStep";

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypeProps | null>(
    null
  );

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <LayoutForm>
      <HeaderForm
        feedbackType={feedbackType}
        onFeedbackRestartRequest={handleRestartFeedback}
      />

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
        <FeedbackContentStep />
      )}

      <FooterForm />
    </LayoutForm>
  );
};
