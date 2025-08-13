import { PostPage } from "@/components/PostPage";
import { ReactElement } from "react";

const PostRoute = (): ReactElement => {
  // const { pathname } = useLocation();
  // const id = Number(pathname.split("/").at(-1));
  // const dispatch = useDispatch<AppDispatch>();
  // useEffect(() => {
  //   if (typeof id !== "number") {
  //     dispatch(fetchPostById(id));
  //   }
  // }, [id, dispatch]);
  return (
    <main>
      <PostPage />
    </main>
  );
};

export default PostRoute