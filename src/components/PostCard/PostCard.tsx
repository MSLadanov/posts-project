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
import useFetch from "@/hooks/useFetch";

type TPostCardProps = {
  link: string;
  post: TPost;
};

export const PostCard: React.FC<TPostCardProps> = ({
  link,
  post,
}): ReactElement => {
  const { patch } = useFetch(`https://dummyjson.com/posts/${post.id}`);
  return (
    <article className="post-card">
      <div className="post-card__header">
        {post.user && (
          <Container>
            <img
              src={post.user.image}
              alt={post.user.firstName + " " + post.user.lastName + " avatar"}
            />
            <h5>{post.user.firstName + " " + post.user.lastName}</h5>
          </Container>
        )}
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
