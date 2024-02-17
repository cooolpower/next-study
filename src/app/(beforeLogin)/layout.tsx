import style from "@/app/page.module.css";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      {modal}
      {children}
    </div>
  );
}
