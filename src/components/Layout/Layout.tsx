import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}
