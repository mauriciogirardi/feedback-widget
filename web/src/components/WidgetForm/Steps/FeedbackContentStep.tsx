export const FeedbackContentStep = () => {
  return (
    <form className="my-4 w-full">
      <textarea
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-500 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-800 scrollbar-track-zinc-700 scrollbar-w-2"
        placeholder="Conte com detalhes o que está acontecendo..."
      />
    </form>
  );
};
