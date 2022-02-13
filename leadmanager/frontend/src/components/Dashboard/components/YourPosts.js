import { Container } from "@material-ui/core";
import YourPostsCard from "./YourPostsCard";

function YourPosts() {
  return (
    <>
      <Container>There are your posts</Container>
      <div className="a-center">
        <YourPostsCard />
      </div>
    </>
  );
}

export default YourPosts;
