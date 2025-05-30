import { TPostAppStore } from "@/types/types";
import { ReactElement } from "react";
import { useSelector } from "react-redux";
import './style.scss'

const UserPage = (): ReactElement => {
  const { data } = useSelector((state: TPostAppStore) => state.user);
  
  return (
    <div className="user-page">
      <img 
        className="user-page__avatar" 
        src={data.image} 
        alt={data.firstName + " avatar"} 
      />
      <p className="user-page__name">
        {data.firstName + " " + data.maidenName + " " + data.lastName}
      </p>
      <p className="user-page__info">
        <a href={`mailto:${data.email}`} className="user-page__email">
          {data.email}
        </a>
      </p>
      <p className="user-page__info">
        <span className="user-page__age">{data.age} y.o.</span>
      </p>
    </div>
  );
};

export default UserPage;