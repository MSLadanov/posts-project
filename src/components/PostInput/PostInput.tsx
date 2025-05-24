import { ReactElement, useState } from "react";
import { TextArea } from "../ui/TextArea";
import { Button } from "@ui/Button";
import "./style.scss";
import { Input } from "../ui/Input";

export const PostInput = (): ReactElement => {
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  return (
    <div>
      <Input
        value={postTitle}
        setValue={setPostTitle}
        type="text"
        label="Post title:"
      />
      <TextArea value={postBody} setValue={setPostBody} />
      <Button />
    </div>
  );
};
