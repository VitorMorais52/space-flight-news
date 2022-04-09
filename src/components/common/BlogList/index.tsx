import { useState } from "react";

//utils
import { dateFormatToShow } from "../../../utils/formatFunctions";

//types
import { BlogProps } from "../../../types/Blog";

//components
import BlogModal from "../BlogModal";
import Image from "../Image";

//styles
import { Container } from "./styles";

type BlogComponentProps = {
  list: BlogProps[];
};

function BlogList({ list }: BlogComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openBlog, setOpenBlog] = useState<BlogProps | null>(null);

  function handleOpen(blog: BlogProps) {
    setOpenBlog(blog);
    setIsOpen(true);
  }

  function onRequestClose() {
    setIsOpen(false);
    setOpenBlog(null);
  }

  return (
    <>
      {list.map((blog, index) => (
        <Container index={index} key={blog.id}>
          <div className="img-container">
            <Image src={blog.imageUrl} alt="post image" />
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
            <button
              type="button"
              className="show-more"
              onClick={() => handleOpen(blog)}
            >
              Ver mais
            </button>
          </div>
        </Container>
      ))}

      {openBlog && (
        <BlogModal
          onRequestClose={onRequestClose}
          isOpen={isOpen}
          blog={openBlog}
        />
      )}
    </>
  );
}

export default BlogList;
