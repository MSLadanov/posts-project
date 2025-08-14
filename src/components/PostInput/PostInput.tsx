import { ReactElement, useState } from "react";
import { TextArea } from "../ui/TextArea";
import { Button } from "@ui/Button";
import { Input } from "../ui/Input";
import {
  faDownLong,
  faPaperPlane,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { TagsBox } from "@components/TagsBox";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "@/api/posts.api";
import "./style.scss";
import { useNewPost } from "@/hooks/useNewPost";

export const PostInput = (): ReactElement => {
  const {
    data: newPostTags,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["new-post-tags"], queryFn: fetchTags });
  const [isOpened, setIsOpened] = useState(false);
  const { title, body, addPost, notifyPortal, handleTag, setBody, setTitle } =
    useNewPost();
  return (
    <div>
      <Button
        icon={isOpened ? faUpLong : faDownLong}
        style={{ color: "black" }}
        action={() => setIsOpened((isOpened) => !isOpened)}
      >
        Write post
      </Button>
      <div className={isOpened ? "post-input__visible" : "post-input"}>
        <h4>Choose tags:</h4>
        <TagsBox getSlug={handleTag} tags={newPostTags} />
        <Input
          value={title}
          setValue={setTitle}
          type="text"
          label="Post title:"
          name="post-title"
        />
        <TextArea value={body} setValue={setBody} label="Post text:" />
        <Button action={addPost} icon={faPaperPlane} style={{ color: "black" }}>
          Send post
        </Button>
      </div>
      {notifyPortal}
    </div>
  );
};
