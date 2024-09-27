import Modal from "react-modal";
import { ComponentType } from "react";

//utils
import { dateFormatToShow } from "../../../utils/formatFunctions";

//types
import { Blog } from "../../../types/Blog";

//components
import Image from "../Image";

//styles
import { Container } from "./styles";

type BlogModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  blog: Blog;
};

function BlogModal({ isOpen, onRequestClose, blog }: BlogModalProps) {
  const ModalSafeForReact18 = Modal as ComponentType<ReactModal["props"]>;
  return (
    <ModalSafeForReact18
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <div className="img-container">
          <Image src={blog.image_url} alt={"post image"} />
        </div>
        <div className="text">
          <h2>{blog.title}</h2>
          <span>{dateFormatToShow(blog.published_at)}</span>
          <span>{blog.summary}</span>
          <a href={blog.url} target="_blank" className="visit-site">
            Ir para o site
          </a>
        </div>
      </Container>
    </ModalSafeForReact18>
  );
}

export default BlogModal;
