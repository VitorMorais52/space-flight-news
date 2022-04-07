import Modal from "react-modal";

//utils
import { dateFormatToShow } from "../../utils/formatFunctions";

//types
import { BlogProps } from "../../types/Blog";

//styles
import { Container } from "./styles";

type BlogModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  blog: BlogProps;
};

function BlogModal({ isOpen, onRequestClose, blog }: BlogModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <div className="img-container">
          <img src={blog.imageUrl} alt={"post image"} />
        </div>
        <div className="text">
          <h2>{blog.title}</h2>
          <span>{dateFormatToShow(blog.publishedAt)}</span>
          <span>{blog.summary}</span>
          <a href={blog.url} target="_blank" className="visit-site">
            Ir para o site
          </a>
        </div>
      </Container>
    </Modal>
  );
}

export default BlogModal;
