import type { ComponentType } from "react";

import SignIn from "pages/SignIn";
import accessToken from "utils/accessToken";

const withAuthentication = <P extends {}>(
  WrappedComponent: ComponentType<JSX.IntrinsicAttributes & P>
) => {
  const WithAuthentic = (props: JSX.IntrinsicAttributes & P) => {
    const isLoggedIn = accessToken.getToken() === null ? false : true;

    if (isLoggedIn === false) {
      return <SignIn />;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthentic;
};

export default withAuthentication;
