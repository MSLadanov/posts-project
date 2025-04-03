import { TPost } from "@/types/types";
import { ReactElement } from "react";
import { BadgeContainer } from "../BadgeContainer";
import { NavLink } from "react-router";
import { Container } from "@ui/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@ui/Button";
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
        <Container>
          <FontAwesomeIcon icon={faEye}/>
          <p>{post.views}</p>
        </Container>
        <Container>
          <Button icon={faThumbsUp}/>
          <Button icon={faThumbsDown}/>
        </Container>
      </div>
    </div>
  );
};
