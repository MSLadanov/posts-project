import { TPost } from "@/types/types";
import { ReactElement } from "react";
import { BadgeContainer } from "@/components/BadgeContainer";
import { NavLink } from "react-router";
import { Container } from "@ui/Container";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@ui/Button";
import { ViewsContainer } from "../ViewsContainer";
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
    <article className="post-card">
      <div className="post-card__header">
        <Container>
          <img src={image} alt={firstname + " " + lastName + " avatar"} />
          <h5>{firstname + " " + lastName}</h5>
        </Container>
        <BadgeContainer tags={post.tags} />
      </div>
      <div className="post-card__body">
        <h2>{post.title}</h2>
        <NavLink to={link}>{post.body}</NavLink>
      </div>
      <div className="post-card__footer">
        <ViewsContainer views={post.views} />
        <Container>
          <Button icon={faThumbsUp}>{post.reactions.likes}</Button>
          <Button icon={faThumbsDown}>{post.reactions.dislikes}</Button>
        </Container>
      </div>
    </article>
  );
};
