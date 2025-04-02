import { ReactElement } from "react";

type TPostCardProps = {
  firstname: string,
  lastName: string,
  image: string,
  link: string
}

export const PostCard : React.FC<TPostCardProps> = (): ReactElement => {
  return <div>PostCard</div>;
};
