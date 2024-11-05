export type TextProps = {
  text: string;
};

export type LoadingProps = {
  isLoading: boolean;
  children: React.ReactNode;
};

export const Loading = ({ children, isLoading }: LoadingProps) => {
  return (
    <div>
      {isLoading ? (
        <p className="bg-red-300 p-4 text-center"> loading - please wait</p>
      ) : (
        children
      )}
    </div>
  );
};

export const ShowText = ({ text }: TextProps) => {
  return <p className="bg-blue-300 p-4 text-center">{text}</p>;
};
