import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";

//styles
// import closeImg from "../../../assets/close.svg";
import { Container } from "./styles";

const BlogModal = () => {
  const { isOpen, onRequestClose } = useModal();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        {/* <img src={closeImg} alt="Fechar modal" /> */}
        close
      </button>
      <Container>conteudo</Container>
    </Modal>
  );
};

export default BlogModal;
