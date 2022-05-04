import { ReactNode } from "react";

type LayoutFormProps = {
  children: ReactNode;
};

export const LayoutForm = ({ children }: LayoutFormProps) => {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {children}
    </div>
  );
};
