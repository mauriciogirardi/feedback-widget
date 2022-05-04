import { CircleNotch } from "phosphor-react";

export const Loading = () => {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="h-5 w-5 animate-spin" />
    </div>
  );
};
