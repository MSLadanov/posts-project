import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import "./style.scss";

type TViewsContainer = {
  views: number;
};

export const ViewsContainer: React.FC<TViewsContainer> = ({
  views,
}): ReactElement => {
  return (
    <div className="view-container">
      <div className="view-container__icon">
        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
      </div>
      <div className="view-container__counter">
        <p>{views}</p>
      </div>
    </div>
  );
};
