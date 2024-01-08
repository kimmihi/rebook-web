import { FaPlus } from "react-icons/fa";

import { colors } from "theme";

import useDialog from "hooks/useDialog";
import Button from "components/Button";
import SearchBookDialog from "./SearchBookDialog";

const RegisterBook = () => {
  const { ref, onOpen, onClose } = useDialog();

  const handleClickPlusButton = () => {
    onOpen();
  };

  return (
    <>
      <Button
        variant="contained"
        style={{
          width: "100px",
          height: "100px",
          color: colors.primary.main,
          backgroundColor: colors.gray[10],
        }}
        onClick={handleClickPlusButton}
      >
        <FaPlus />
      </Button>
      <SearchBookDialog ref={ref} onClose={onClose} />
    </>
  );
};

export default RegisterBook;
