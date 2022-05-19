import { FormEvent, useState } from "react";
import { api } from "../../../lib/api";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../../ScreenshotButton";

type FeedbackContentStepProps = {
  feedbackType: string | null;
  onFeedbackSend: (isFeedbackSend: boolean) => void;
};

interface PostFeedbackProps {
  type: string;
  comment: string;
  screenshot: string;
}

export const FeedbackContentStep = ({
  feedbackType,
  onFeedbackSend,
}: FeedbackContentStepProps) => {
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSendingFeedback(true);
    try {
      if (comment) {
        await api.post<PostFeedbackProps>("/feedbacks", {
          type: feedbackType,
          comment,
          screenshot,
        });
        onFeedbackSend(true);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSendingFeedback(false);
    }
  }

  return (
    <form className="my-4 w-full" onSubmit={onSubmit}>
      <textarea
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-500 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-800 scrollbar-track-zinc-700 scrollbar-w-2"
        placeholder="Conte com detalhes o que está acontecendo..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <footer className="flex gap-2 mt-2">
        <ScreenshotButton
          onScreenshotTook={setScreenshot}
          screenshot={screenshot}
        />

        <button
          type="submit"
          disabled={!comment || isSendingFeedback}
          className="p-2 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-brand-500 focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-zinc-900 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm transition-colors hover:bg-brand-300"
        >
          {isSendingFeedback ? <Loading /> : "Enviar feedback"}
        </button>
      </footer>
    </form>
  );
};
