import css from "./PageTitle.module.css";

interface Props {
  children: React.ReactNode;
}

export default function PageTitle({ children }: Props) {
  return <h1 className={css.heading}>{children}</h1>;
}
