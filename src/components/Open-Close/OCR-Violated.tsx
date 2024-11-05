export type TextProps = {
  text: string;
  isLoading: boolean;
};

export const Text = ({ text, isLoading }: TextProps) => {
  if (isLoading) {
    return <p className="bg-red-300 w-1/2 p-4 text-center">please wait</p>;
  }

  return <p className="bg-blue-300 w-1/2 p-4 text-center">{text}</p>;
};
