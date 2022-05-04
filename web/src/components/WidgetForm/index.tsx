import { useState } from "react";

import { FooterForm } from "./FooterForm";
import { HeaderForm } from "./HeaderForm";
import { LayoutForm } from "./LayoutForm";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep, FeedbackTypeProps } from "./Steps/FeedbackTypeStep";

export const WidgetForm = () => {
  const [feedbackSend, setFeedbackSend] = useState(false);
  const [feedbackType, setFeedbackType] = useState<FeedbackTypeProps | null>(
    null
  );

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSend(false);
  }

  return (
    <LayoutForm>
      {feedbackSend ? (
        <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback} />
      ) : (
        <>
          <HeaderForm
            feedbackType={feedbackType}
            onFeedbackRestartRequest={handleRestartFeedback}
          />

          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackSend={setFeedbackSend}
            />
          )}
        </>
      )}

      <FooterForm />
    </LayoutForm>
  );
};
