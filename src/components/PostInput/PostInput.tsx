import { ReactElement, useState } from "react";
import { TextArea } from "../ui/TextArea";
import { Button } from "@ui/Button";
import "./style.scss";
import { Input } from "../ui/Input";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export const PostInput = (): ReactElement => {
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postTags, setPostTags] = useState([])
  const addNewPost = async () => {};
  return (
    <div>
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
