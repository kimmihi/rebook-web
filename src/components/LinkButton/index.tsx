import type { ButtonProps } from "components/Button";
import { useNavigate } from "react-router-dom";

import Button from "components/Button";

interface Props extends ButtonProps {
  to: string;
}

const LinkButton = ({ to, ...props }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return <Button {...props} onClick={handleClick} />;
};

export default LinkButton;
