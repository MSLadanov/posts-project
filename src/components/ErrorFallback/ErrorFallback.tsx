import { TFallbackRenderProps } from "@/types/types";
import "./style.scss";

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: TFallbackRenderProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};
