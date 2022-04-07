import { useQuery } from "react-query";

//services
import api from "../../services/api";

//types
import { BlogProps } from "../../types/Blog";

//components
import Header from "../Header";

//styles
import { Container } from "./styles";

function Home() {
  const { data, isFetching } = useQuery<BlogProps[]>("blogs", async () => {
    const response = await api.get("/blogs", {
      params: {
        _limit: 100,
        publishedAt_lte: "2021-05-18T13:49:04.210Z",
        publishedAt_gte: "2020-11-23T09:06:07.000Z",
        _sort: "publishedAt",
      },
    });
    return response.data;
  });

  console.log("data", data);

  return (
    <Container>
      <div className="content">
        <Header />
        <h1>Home</h1>
      </div>
    </Container>
  );
}

export default Home;
