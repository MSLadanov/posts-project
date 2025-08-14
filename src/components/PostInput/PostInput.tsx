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
import { useSelector } from "react-redux";
import { TPost, TPostAppStore } from "@/types/types";
import { fetchImage } from "@/api/utils";
import useFetch from "@/hooks/useFetch";
import { useNotify } from "@/hooks/useNotify";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "@/api/posts.api";
import "./style.scss";

export const PostInput = (): ReactElement => {
  const { id, firstName, lastName, image } = useSelector(
    (state: TPostAppStore) => state.user.data
  );
  const {data: newPostTags, isLoading, isError} = useQuery({queryKey:['new-post-tags'], queryFn: fetchTags})
  const [isOpened, setIsOpened] = useState(false);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const clearPostInput = () => {
    setBody("");
    setTitle("");
    setTags([]);
    setIsOpened(false);
  };
  const { notify, notifyPortal } = useNotify();
  const handleSlug = (slug: string) => {
    setTags([...tags, slug]);
  };
  const { post } = useFetch(`https://dummyjson.com`);
  const addNewPost = async () => {
    const newPost: TPost = {
      id: Math.floor(Math.random() * 20001) + 10000,
      userId: id,
      user: {
        firstName,
        lastName,
        image,
      },
      comments: [],
      rate: "",
      postImage: await fetchImage(title),
      rated: false,
      title,
      body,
      tags,
      views: 0,
      reactions: {
        likes: 0,
        dislikes: 0,
      },
    };
    console.log(newPost)
    notify("New post added!", "success");
    await post("posts/add", newPost);
    clearPostInput();
  };
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
        <TagsBox getSlug={handleSlug} tags={newPostTags} />
        <Input
          value={title}
          setValue={setTitle}
          type="text"
          label="Post title:"
          name="post-title"
        />
        <TextArea value={body} setValue={setBody} label="Post text:" />
        <Button
          action={addNewPost}
          payload={{ body, title, tags }}
          icon={faPaperPlane}
          style={{ color: "black" }}
        >
          Send post
        </Button>
      </div>
      {notifyPortal}
    </div>
  );
};
