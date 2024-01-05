import type { ComponentType } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector } from "store";
import { selectIsLoggedIn } from "store/slices/auth";

const withAuthentication = <P extends {}>(
  WrappedComponent: ComponentType<JSX.IntrinsicAttributes & P>
) => {
  const WithAuthentic = (props: JSX.IntrinsicAttributes & P) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const navigate = useNavigate();

    if (isLoggedIn === false) {
      navigate("/signin");
      return;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthentic;
};

export default withAuthentication;
