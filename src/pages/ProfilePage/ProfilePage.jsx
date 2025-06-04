import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import { selectUser } from "../../redux/auth/selectors";

export default function Profile() {
  const user = useSelector(selectUser);

  return (
    <div>
      <PageTitle>Welcome to your profile {user.name}</PageTitle>
    </div>
  );
}
