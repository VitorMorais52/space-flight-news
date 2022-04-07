import { useState } from "react";

//utils
import { dateFormatToShow } from "../../utils/formatFunctions";

//types
import { BlogProps } from "../../types/Blog";

//components
import BlogModal from "../BlogModal";

//styles
import { Container } from "./styles";

type BlogComponentProps = {
  blog: BlogProps;
  index: number;
};

function Blog({ blog, index }: BlogComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function onRequestClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Container index={index} key={blog.id}>
        <div className="img-container">
          <img
            srcSet={blog.imageUrl}
            src={
              "https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg"
            }
            alt={"post image"}
          />
        </div>
        <div className="text">
          <h2>{blog.title}</h2>
          <div className="double-in-line">
            <span>{dateFormatToShow(blog.publishedAt)}</span>
            <a href={blog.url} target="_blank" className="link">
              {blog.newsSite}
            </a>
          </div>
          <span>{blog.summary}</span>
          <button type="button" className="show-more" onClick={handleOpen}>
            Ver mais
          </button>
        </div>
      </Container>
      <BlogModal onRequestClose={onRequestClose} isOpen={isOpen} blog={blog} />
    </>
  );
}

export default Blog;
