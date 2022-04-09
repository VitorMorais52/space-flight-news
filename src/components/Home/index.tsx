import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useLocation, useSearchParams } from "react-router-dom";
import queryString from "query-string";
import Modal from "react-modal";

//services
import api from "../../services/api";

//types
import { BlogProps } from "../../types/Blog";

//components
import Header from "../Header";
import Blog from "../Blog";
import LoadingBlog from "../LoadingBlog";

//styles
import { Main, GridBlog, Footer } from "./styles";

Modal.setAppElement("#root");

function Home() {
  const queryClient = useQueryClient();
  const { search } = useLocation();
  const [_, setSearchParams] = useSearchParams();

  const { title_contains, _sort } = queryString.parse(search);

  const initStateFilters = {
    title_contains:
      title_contains && typeof title_contains !== "object"
        ? title_contains
        : "",
    _sort: _sort && typeof _sort !== "object" ? _sort : "",
  };

  const [filters, setFilters] = useState(initStateFilters);
  const [limitItems, setLimitItems] = useState(10);

  const params = { _limit: limitItems, ...filters };

  const { data } = useQuery<BlogProps[]>(
    "blogs",
    async () => {
      const response = await api.get("/blogs", { params });
      return response.data;
    },
    { staleTime: 1000 * 60 /* 1 minute */ }
  );

  useEffect(() => {
    setSearchParams(filters);
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
          {data ? (
            data.map((blog, index) => (
              <Blog blog={blog} index={index} key={blog.id} />
            ))
          ) : (
            <LoadingBlog quantityItems={10} />
          )}
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
