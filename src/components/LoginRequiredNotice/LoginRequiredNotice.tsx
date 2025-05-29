import { ReactElement } from "react";
import "./style.scss";

export const LoginRequiredNotice = (): ReactElement => {
  return (
    <div className="login-notice">
      <span className="login-notice__icon">🔒</span>
      <p className="login-notice__text">
        This feature is for members only. Sign in to write a post / leave a
        rating and join the community!
      </p>
    </div>
  );
};