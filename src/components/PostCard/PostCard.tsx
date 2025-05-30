import { TPost, TPostAppStore} from "@/types/types";
import { ReactElement } from "react";
import { BadgeContainer } from "@/components/BadgeContainer";
import { NavLink, useLocation } from "react-router";
import { Container } from "@ui/Container";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@ui/Button";
import { ViewsContainer } from "../ViewsContainer";
import useFetch from "@/hooks/useFetch";
import { useRatePost } from "@/hooks/useRatePost";
import "./style.scss";
import { useSelector } from "react-redux";

type TPostCardProps = {
  link: string;
  post: TPost;
};

export const PostCard: React.FC<TPostCardProps> = ({
  link,
  post,
}): ReactElement => {
  const { pathname } = useLocation();
  const postId = Number(pathname.split("/").at(-1));
  const { get, patch } = useFetch(`https://dummyjson.com`);
  const { tag } = useSelector((state: TPostAppStore) => state.posts);
  const { id : userId } = useSelector(
    (state: TPostAppStore) => state.user.data
  );
  const { ratePost, ratePagedPost } = useRatePost({
    post,
    getPost: get,
    patchPost: patch,
  });
  const ratePostAsync = async (newRate: string | object) => {
    if (newRate === "liked") {
      await ratePost("liked");
    } else {
      await ratePost("disliked");
    }
  };
  const ratePagedPostAsync = async (newRate: string | object) => {
    if (newRate === "liked") {
      await ratePagedPost("liked");
    } else {
      await ratePagedPost("disliked");
    }
  };
  return (
    <article className="post-card">
      <div className="post-card__header">
        {post.user ? (
          <Container>
            <img
              src={post.user.image}
              alt={post.user.firstName + " " + post.user.lastName + " avatar"}
            />
            <h5>{post.user.firstName + " " + post.user.lastName}</h5>
          </Container>
        ) : <div></div>}
        <BadgeContainer tags={post.tags} tagsStore={tag} />
      </div>
      <div className="post-card__body">
        <h2>{post.title}</h2>

        {postId ? (
          <img src={post.postImage} alt={post.title} />
        ) : (
          <NavLink to={link}>
            <img src={post.postImage} alt={post.title} />
          </NavLink>
        )}
        {postId ? <p>{post.body}</p> : <NavLink to={link}>{post.body}</NavLink>}
      </div>
      <div className="post-card__footer">
        <ViewsContainer views={post.views} />
        <Container>
          <Button
            icon={faThumbsUp}
            action={!postId ? ratePostAsync : ratePagedPostAsync}
            payload={"liked"}
            isAuthOnly={true}
            disabled={post.userId === userId}
            style={{color:'blue'}}
          >
            {post.reactions.likes}
          </Button>
          <Button
            icon={faThumbsDown}
            action={!postId ? ratePostAsync : ratePagedPostAsync}
            payload={"disliked"}
            isAuthOnly={true}
            disabled={post.userId === userId}
            style={{color:'red'}}
          >
            {post.reactions.dislikes}
          </Button>
        </Container>
      </div>
    </article>
  );
};
