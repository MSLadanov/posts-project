import { TPost } from "@/types/types";
import { ReactElement } from "react";
import { BadgeContainer } from "@/components/BadgeContainer";
import { NavLink } from "react-router";
import { Container } from "@ui/Container";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@ui/Button";
import { ViewsContainer } from "../ViewsContainer";
import useFetch from "@/hooks/useFetch";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { ratePost } from "@/store/slices/PostsSlice";
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
  const dispatch = useDispatch<AppDispatch>();
  const rate = async (rate: string | object) => {
    // let { reactions } = post;
    // if (typeof rate === "string") {
    //   if (rate === "like") {
    //     reactions = {
    //       ...reactions,
    //       likes: reactions.likes + 1,
    //     };
    //   } else if (rate === "dislike") {
    //     reactions = {
    //       ...reactions,
    //       dislikes: reactions.dislikes + 1,
    //     };
    //   }
    // }
    // const ratedPost = await patch(`posts/${post.id}`, { reactions });
    dispatch(ratePost({post, reaction: rate}));
  };
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
          <Button icon={faThumbsUp} action={rate} payload={"like"}>
            {post.reactions.likes}
          </Button>
          <Button icon={faThumbsDown} action={rate} payload={"dislike"}>
            {post.reactions.dislikes}
          </Button>
        </Container>
      </div>
    </article>
  );
};
