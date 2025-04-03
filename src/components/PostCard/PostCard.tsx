import { TPost } from "@/types/types";
import { ReactElement } from "react";
import { BadgeContainer } from "../BadgeContainer";
import { NavLink } from "react-router";
import { Container } from "../ui/Container";
import "./style.scss";

type TPostCardProps = {
  firstname: string;
  lastName: string;
  image: string;
  link: string;
  post: TPost;
};

export const PostCard: React.FC<TPostCardProps> = ({
  firstname,
  lastName,
  image,
  link,
  post,
}): ReactElement => {
  return (
    <div className="post-card">
      <div className="post-card__header">
        <Container>
          <img src={image} alt={firstname + " " + lastName + " avatar"} />
          <h5>{firstname + " " + lastName}</h5>
        </Container>
        <BadgeContainer tags={post.tags} />
      </div>
      <div className="post-card__body">
        <NavLink to={link}>{post.body}</NavLink>
      </div>
      <div className="post-card__footer">
        
      </div>
    </div>
  );
};
