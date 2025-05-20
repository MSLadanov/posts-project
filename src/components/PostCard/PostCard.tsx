import { TPost } from "@/types/types";
import { ReactElement, useState } from "react";
import { BadgeContainer } from "@/components/BadgeContainer";
import { NavLink } from "react-router";
import { Container } from "@ui/Container";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@ui/Button";
import { ViewsContainer } from "../ViewsContainer";
import useFetch from "@/hooks/useFetch";
import "./style.scss";

type TPostCardProps = {
  link: string;
  post: TPost;
};

export const PostCard: React.FC<TPostCardProps> = ({
  link,
  post,
}): ReactElement => {
  const { patch } = useFetch(`https://dummyjson.com`);
  const [postState, setPostState] = useState({...post, rated: false});
  const ratePost = async (rate: string | object) => {
    const postRate = { ...post.reactions };
    if (rate === "like") {
      !postState.rated &&  postRate.likes++;
    } else {
      !postState.rated && postRate.dislikes++;
    }
    const ratedPost = await patch(`posts/${post.id}`, { reactions: postRate });
    const editedPost = { user: post.user, ...ratedPost, views: post.views };
    setPostState({...editedPost, rated: !postState.rated});
  };
  return (
    <article className="post-card">
      <div className="post-card__header">
        {postState.user && (
          <Container>
            <img
              src={postState.user.image}
              alt={
                postState.user.firstName +
                " " +
                postState.user.lastName +
                " avatar"
              }
            />
            <h5>{postState.user.firstName + " " + postState.user.lastName}</h5>
          </Container>
        )}
        <BadgeContainer tags={postState.tags} />
      </div>
      <div className="post-card__body">
        <h2>{postState.title}</h2>
        <NavLink to={link}>{postState.body}</NavLink>
      </div>
      <div className="post-card__footer">
        <ViewsContainer views={postState.views} />
        <Container>
          <Button icon={faThumbsUp} action={ratePost} payload={"like"}>
            {postState.reactions.likes + ' ' + postState.rated}
          </Button>
          <Button icon={faThumbsDown} action={ratePost} payload={"dislike"}>
            {postState.reactions.dislikes+ ' ' + postState.rated}
          </Button>
        </Container>
      </div>
    </article>
  );
};
