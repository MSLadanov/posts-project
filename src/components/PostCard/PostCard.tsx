import { TPost } from "@/types/types";
import { ReactElement } from "react";

type TPostCardProps = {
  firstname: string,
  lastName: string,
  image: string,
  link: string,
  post: TPost
}

export const PostCard : React.FC<TPostCardProps> = ({firstname, lastName, image, link, post}): ReactElement => {
  return <div className="post-card">
    <div className="post-card__header">
      <img src={image} alt={firstname + ' ' + lastName + ' avatar'} />
      <h5>{firstname + ' ' + lastName}</h5>
    </div>
    <div className="post-card__body">{post.body}</div>
    <div className="post-card__footer"></div>
  </div>;
};
