import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

interface Props {
  component: React.ReactElement;
}

export default function PrivateRoute({ component }: Props) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? component : <Navigate to="/login" />;
}
