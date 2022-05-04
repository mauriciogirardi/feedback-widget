import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../CloseButton";
import { FeedbackTypeProps, feedbackTypes } from "./Steps/FeedbackTypeStep";

type HeaderFormProps = {
  feedbackType?: FeedbackTypeProps | null;
  onFeedbackRestartRequest: () => void;
};

export const HeaderForm = ({
  feedbackType,
  onFeedbackRestartRequest,
}: HeaderFormProps) => {
  return (
    <header>
      {feedbackType && (
        <button
          title="Você voltara para os tipos de feedbacks"
          onClick={onFeedbackRestartRequest}
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 transition"
        >
          <ArrowLeft weight="bold" className="h-4 w-4" />
        </button>
      )}

      <samp className="text-xl leading-6">
        {!feedbackType && "Deixe seu feedback"}

        {feedbackType && (
          <div className="flex items-center gap-1">
            <img
              className="w-6 h-6"
              src={feedbackTypes[feedbackType].image.source}
              alt={feedbackTypes[feedbackType].image.alt}
            />
            {feedbackTypes[feedbackType].title}
          </div>
        )}
      </samp>

      <CloseButton />
    </header>
  );
};
