import { ReactElement } from "react";
import { useLocation } from "react-router";

export const PostPage = () : ReactElement => {
    const {pathname} = useLocation()
    console.log(pathname.split('/').at(-1))
    return <div>Post Page</div>
}