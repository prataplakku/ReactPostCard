
import Image from "next/image";
import PostList from './PostList'
import Login from "./Login";
import Post from "./UseReducerTutorial/Post";
import Post2 from "./UseReducerTutorial/Post2";

export default function Home() {
  return (
    <div className="Home">
      {/* <PostList /> */}
      {/* <Login/> */}
      <Post />
      {/* <Post2 /> */}
    </div>
  );
}
