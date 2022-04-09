//@mui components
import Skeleton from "@mui/material/Skeleton";

//styles
import { Container } from "./styles";

type LoadingBlogProps = {
  quantityItems: number;
};

function LoadingBlog({ quantityItems }: LoadingBlogProps) {
  return (
    <>
      {Array.from({ length: quantityItems }).map((_, index) => (
        <Container index={index} key={index}>
          <div className="text">
            <Skeleton variant="text" height={"45px"} />
            <div className="double-in-line">
              <Skeleton variant="text" height={"30px"} width={"140px"} />
              <Skeleton variant="text" height={"30px"} width={"140px"} />
            </div>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" height={"44px"} width={"100px"} />
          </div>
          <Skeleton className="img-container" variant="rectangular" />
        </Container>
      ))}
    </>
  );
}

export default LoadingBlog;
