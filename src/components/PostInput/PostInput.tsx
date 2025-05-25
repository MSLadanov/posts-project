import { ReactElement, useState } from "react";
import { TextArea } from "../ui/TextArea";
import { Button } from "@ui/Button";
import { Input } from "../ui/Input";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import TagsBox from "../TagsBox/TagsBox";
import "./style.scss";

export const PostInput = (): ReactElement => {
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postTags, setPostTags] = useState([])
  const handleSlug = (slug: string) => {
    console.log(slug)
  }
  const addNewPost = async () => {};
  return (
    <div className="post-input">
      <TagsBox getSlug={handleSlug} />
      <Input
        value={postTitle}
        setValue={setPostTitle}
        type="text"
        label="Post title:"
      />
      <TextArea value={postBody} setValue={setPostBody} />
      <Button
        action={addNewPost}
        payload={{ postBody, postTitle }}
        icon={faPaperPlane}
      />
    </div>
  );
};
