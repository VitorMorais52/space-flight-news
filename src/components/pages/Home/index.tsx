import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import Modal from "react-modal";

//hooks
import useQueryParams from "../../../hooks/useQueryParams";

//services
import api from "../../../services/api";

//types
import { DataProps } from "../../../types/Blog";

//components
import Header from "../../common/Header";
import BlogList from "../../common/BlogList";
import LoadingBlog from "../../common/LoadingBlog";

//styles
import { Main, GridBlog, Footer } from "./styles";

Modal.setAppElement("#root");

function Home() {
  const queryClient = useQueryClient();
  const { initStateFilters, setQueryParams } = useQueryParams();

  const [filters, setFilters] = useState(initStateFilters);
  const [limitItems, setLimitItems] = useState(10);

  const params = { _limit: limitItems, ...filters };

  const { data } = useQuery<DataProps>(
    "blogs",
    async () => {
      const response = await api.get("/blogs", { params });
      return response.data;
    },
    { staleTime: 1000 * 60 /* 1 minute */ }
  );

  useEffect(() => {
    setQueryParams(filters);
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
            <BlogList list={data.results} />
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
