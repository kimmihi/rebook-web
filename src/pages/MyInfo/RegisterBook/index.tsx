import { FaPlus } from "react-icons/fa";

import { colors } from "theme";

import Button from "components/Button";

const RegisterBook = () => {
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
      >
        <FaPlus />
      </Button>
    </>
  );
};

export default RegisterBook;
