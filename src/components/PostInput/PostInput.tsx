import { ReactElement, useState } from "react";
import { TextArea } from "../ui/TextArea";
import { Button } from "@ui/Button";
import { Input } from "../ui/Input";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { TagsBox } from "@components/TagsBox";
import { useSelector } from "react-redux";
import { TPostAppStore} from "@/types/types";
import "./style.scss";

export const PostInput = (): ReactElement => {
  const { id,firstName,lastName, image } = useSelector((state: TPostAppStore) => state.user.data);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const handleSlug = (slug: string) => {
    setTags([...tags, slug]);
  };
  const addNewPost = async () => {
    console.log({
      id,
      firstName,
      lastName,
      image,
      title,
      body,
      tags,
      views: 0,
      reactions: {
        likes: 0,
        dislikes: 0,
      },
    });
  };
  return (
    <div className="post-input">
      <TagsBox getSlug={handleSlug} tagStore={tags} />
      <Input
        value={title}
        setValue={setTitle}
        type="text"
        label="Post title:"
      />
      <TextArea value={body} setValue={setBody} />
      <Button
        action={addNewPost}
        payload={{ body, title, tags }}
        icon={faPaperPlane}
      />
    </div>
  );
};
