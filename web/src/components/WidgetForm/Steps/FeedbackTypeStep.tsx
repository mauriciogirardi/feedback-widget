import bugImageUrl from "../../../assets/svgs/bug.svg";
import ideaImageUrl from "../../../assets/svgs/idea.svg";
import thoughtImageUrl from "../../../assets/svgs/cloud.svg";

export type FeedbackTypeProps = keyof typeof feedbackTypes;

type CardsFeedbackTypesProps = {
  onFeedbackTypeChange: (feedbackType: FeedbackTypeProps | null) => void;
};

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um nuven de pensamento",
    },
  },
};

export const FeedbackTypeStep = ({
  onFeedbackTypeChange,
}: CardsFeedbackTypesProps) => {
  return (
    <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => (
        <button
          key={key}
          type="button"
          onClick={() => onFeedbackTypeChange(key as FeedbackTypeProps)}
          className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 focus:border-brand-500 focus:outline-none border-transparent hover:border-brand-500 transition"
        >
          <img src={value.image.source} alt={value.image.alt} />
          <samp>{value.title}</samp>
        </button>
      ))}
    </div>
  );
};
