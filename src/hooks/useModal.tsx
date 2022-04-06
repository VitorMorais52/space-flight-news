import { useState, createContext, useContext } from "react";

type ModalContextProps = {
  isOpen: boolean;
  handleOpen: () => void;
  onRequestClose: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function onRequestClose() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        handleOpen,
        onRequestClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  return context;
}
