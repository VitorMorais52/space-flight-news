import { useEffect, useState } from "react";
import Modal from "react-modal";

//styles
// import closeImg from "../../../assets/close.svg";

type ModalComponentProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const ModalComponent = ({ isOpen, onRequestClose }: ModalComponentProps) => {
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
      <div className="content"></div>
    </Modal>
  );
};

export default ModalComponent;
