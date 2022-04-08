//@mui components
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

//styles
import { Container } from "./styles";

type LoadingBlogProps = {
  quantityItems: number;
};

function LoadingBlog({ quantityItems }: LoadingBlogProps) {
  return (
    <>
      {Array.from({ length: quantityItems }).map((item, index) => (
        <Container index={index}>
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
          <Skeleton
            className="container-img"
            variant="rectangular"
            width={300}
            height={300}
          />
        </Container>
      ))}
    </>
  );
}

export default LoadingBlog;
