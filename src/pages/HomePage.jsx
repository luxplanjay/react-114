import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1 onClick={handleClick}>Home page</h1>
    </div>
  );
}
