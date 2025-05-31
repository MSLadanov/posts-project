import { ReactElement } from "react";
import './style.scss';

export const Loader = (): ReactElement => {
  return (
    <div className="loader">
      <div className="loader__spinner">
        <div className="loader__dot"></div>
        <div className="loader__dot"></div>
        <div className="loader__dot"></div>
        <div className="loader__dot"></div>
      </div>
    </div>
  );
};