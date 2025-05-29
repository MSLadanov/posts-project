import { ReactElement } from "react";
import "./style.scss";

export const LoginRequiredNotice = (): ReactElement => {
  return (
    <div>
      🔒 This feature is for members only. Sign in to write a post / leave a
      rating and join the community!
    </div>
  );
};
