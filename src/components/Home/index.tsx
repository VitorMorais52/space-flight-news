import Modal from "react-modal";
import { useQuery, useQueryClient } from "react-query";

//services
import api from "../../services/api";

//types
import { BlogProps } from "../../types/Blog";

//components
import Header from "../Header";
import Blog from "../Blog";

//styles
import { Main, GridBlog, Footer } from "./styles";
import { useEffect, useState } from "react";

Modal.setAppElement("#root");

function Home() {
  const queryClient = useQueryClient();

  const [limitItems, setLimitItems] = useState(10);
  const [filters, setFilters] = useState({ title_contains: "", _sort: "" });

  const params = { _limit: limitItems, ...filters };

  const { data, isFetching } = useQuery<BlogProps[]>(
    "blogs",
    async () => {
      const response = await api.get("/blogs", { params });
      return response.data;
    },
    { staleTime: 1000 * 60 /* 1 minute */ }
  );

  useEffect(() => {
    queryClient.fetchQuery("blogs");
  }, [filters, limitItems]);

  return (
    <>
      <Header
        filters={filters}
        changeFilters={(filters) => setFilters(filters)}
      />
      <Main>
        <GridBlog>
          {data &&
            data.map((blog, index) => (
              <Blog blog={blog} index={index} key={blog.id} />
            ))}
        </GridBlog>
      </Main>
      <Footer>
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="square" key={index} />
        ))}
        <button
          className="load-more"
          onClick={() => setLimitItems(limitItems + 10)}
        >
          Carregar mais
        </button>
      </Footer>
    </>
  );
}

export default Home;
