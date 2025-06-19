import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

interface Props {
  component: React.ReactElement;
  redirectTo: string;
}

export default function RestrictedRoute({ component, redirectTo }: Props) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
