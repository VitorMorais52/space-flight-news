import Modal from "react-modal";
import { useQuery } from "react-query";

//services
import api from "../../services/api";

//types
import { BlogProps } from "../../types/Blog";

//components
import Header from "../Header";
import Blog from "../Blog";

//styles
import { Container, GridBlog } from "./styles";

Modal.setAppElement("#root");

function Home() {
  const { data, isFetching } = useQuery<BlogProps[]>("blogs", async () => {
    const response = await api.get("/blogs", {
      params: {
        _limit: 10,
        publishedAt_lte: "2021-05-18T13:49:04.210Z",
        publishedAt_gte: "2020-11-23T09:06:07.000Z",
        _sort: "publishedAt",
      },
    });
    return response.data;
  });

  return (
    <Container>
      <div className="content">
        <Header />
        <GridBlog>
          {data &&
            data.map((blog, index) => <Blog blog={blog} index={index} />)}
        </GridBlog>
      </div>
    </Container>
  );
}

export default Home;
