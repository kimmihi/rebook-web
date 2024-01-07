import type { ComponentType } from "react";

import SignIn from "pages/SignIn";

const withAuthentication = <P extends {}>(
  WrappedComponent: ComponentType<JSX.IntrinsicAttributes & P>
) => {
  const WithAuthentic = (props: JSX.IntrinsicAttributes & P) => {
    const isLoggedIn = localStorage.getItem("accessToken") ? true : false;

    if (isLoggedIn === false) {
      return <SignIn />;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthentic;
};

export default withAuthentication;
