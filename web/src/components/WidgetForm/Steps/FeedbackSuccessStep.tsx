import { CloseButton } from "../../CloseButton";
import successSvg from "../../../assets/svgs/ready.svg";

type FeedbackSuccessStepProps = {
  onFeedbackRestartRequest: () => void;
};

export const FeedbackSuccessStep = ({
  onFeedbackRestartRequest,
}: FeedbackSuccessStepProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successSvg} alt="icone de sucesso" />
        <span className="text-xl mt-2">Agradecemos o feedback!</span>
        <button
          type="button"
          onClick={onFeedbackRestartRequest}
          className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-zinc-900 py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};
